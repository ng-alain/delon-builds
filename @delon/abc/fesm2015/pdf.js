import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, NgZone, ElementRef, Optional, Inject, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber, InputBoolean, ZoneOutside } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

const PDF_DEFULAT_CONFIG = {
    lib: `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/`,
    showAll: true,
    renderText: true,
    showBorders: false,
    originalSize: true,
    fitToPage: false,
    autoReSize: true,
};

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
        this.ngZone.run(() => this.change.emit(Object.assign({ type, pdf: this._pdf, pi: this._pi, total: this._total }, opt)));
    }
    initDelay() {
        this.inited = true;
        this.cdr.detectChanges();
        this.win.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.lib}build/pdf.worker.min.js`;
        setTimeout(() => this.load(), this.delay);
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
        const loadingTask = (this.loadingTask = this.win.pdfjsLib.getDocument(_src));
        loadingTask.onProgress = (progress) => this.emit('load-progress', { progress });
        loadingTask.promise.then((pdf) => {
            this._pdf = pdf;
            this.lastSrc = _src;
            this._total = pdf.numPages;
            this.emit('loaded');
            if (!this.pageViewer) {
                this.setupPageViewer();
            }
            this.resetDoc();
            this.render();
        }, (error) => this.emit('error', { error }));
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
                rotation,
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
            eventBus,
        }));
        const findController = (this.multiPageFindController = new VIEWER.PDFFindController({
            eventBus,
            linkService,
        }));
        const viewer = (this.multiPageViewer = new VIEWER.PDFViewer({
            eventBus,
            container: this.el,
            removePageBorders: !this.showBorders,
            textLayerMode: this._textLayerMode,
            linkService,
            findController,
        }));
        linkService.setViewer(viewer);
    }
    setupSinglePageViewer() {
        const VIEWER = this.win.pdfjsViewer;
        const eventBus = this.createEventBus();
        const linkService = (this.singlePageLinkService = new VIEWER.PDFLinkService({
            eventBus,
        }));
        const findController = (this.singlePageFindController = new VIEWER.PDFFindController({
            eventBus,
            linkService,
        }));
        const pageViewer = (this.singlePageViewer = new VIEWER.PDFSinglePageViewer({
            eventBus,
            container: this.el,
            removePageBorders: !this.showBorders,
            textLayerMode: this._textLayerMode,
            linkService,
            findController,
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
PdfComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf',
                exportAs: 'pdf',
                template: `
    <nz-skeleton *ngIf="!inited"></nz-skeleton>
    <div class="pdf-container">
      <div class="pdfViewer"></div>
    </div>
  `,
                host: {
                    '[class.d-block]': `true`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
PdfComponent.ctorParameters = () => [
    { type: NgZone },
    { type: AlainConfigService },
    { type: LazyService },
    { type: Platform },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
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
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PdfComponent.prototype, "load", null);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PdfComponent.prototype, "resetDoc", null);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PdfComponent.prototype, "updateSize", null);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PdfComponent.prototype, "destroy", null);

const COMPONENTS = [PdfComponent];
class PdfModule {
}
PdfModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { PDF_DEFULAT_CONFIG, PdfComponent, PdfExternalLinkTarget, PdfModule, PdfTextLayerMode };
//# sourceMappingURL=pdf.js.map
