import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfExternalLinkTarget, PdfTextLayerMode } from './pdf.types';
const CSS_UNITS = 96.0 / 72.0;
const BORDER_WIDTH = 9;
let PdfComponent = class PdfComponent {
    constructor(ngZone, configSrv, lazySrv, platform, el, doc) {
        this.ngZone = ngZone;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this.el = el;
        this.doc = doc;
        this.inited = false;
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
        this.ngZone.runOutsideAngular(() => {
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
        });
    }
    resetDoc() {
        const pdf = this._pdf;
        if (!pdf) {
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this.cleanDoc();
            this.findController.setDocument(pdf);
            this.pageViewer.setDocument(pdf);
            this.linkService.setDocument(pdf, null);
        });
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
        this.ngZone.runOutsideAngular(() => {
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
                if (!this.originalSize || (this.fitToPage && viewportWidth > this.el.nativeElement.clientWidth)) {
                    const viewPort = page.getViewport({ scale: 1, rotation });
                    scale = this.getScale(viewPort.width, viewPort.height);
                    stickToPage = !this.stickToPage;
                }
                currentViewer._setScale(scale, stickToPage);
            });
        });
    }
    getScale(viewportWidth, viewportHeight) {
        const borderSize = this.showBorders ? 2 * BORDER_WIDTH : 0;
        const el = this.el.nativeElement;
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
        this.ngZone.runOutsideAngular(() => {
            const { loadingTask } = this;
            if (loadingTask && !loadingTask.destroyed) {
                loadingTask.destroy();
            }
            if (this._pdf) {
                this._pdf.destroy();
                this._pdf = null;
                this.cleanDoc();
            }
        });
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
            container: this.el.nativeElement,
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
            container: this.el.nativeElement,
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
            .pipe(debounceTime(100), filter(() => this.autoReSize && this._pdf), untilDestroyed(this))
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
};
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
            },] }
];
/** @nocollapse */
PdfComponent.ctorParameters = () => [
    { type: NgZone },
    { type: AlainConfigService },
    { type: LazyService },
    { type: Platform },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
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
PdfComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [NgZone,
        AlainConfigService,
        LazyService,
        Platform,
        ElementRef, Object])
], PdfComponent);
export { PdfComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wZGYvcGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFzQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxhQUFhLENBQUM7QUFFeEgsTUFBTSxTQUFTLEdBQVcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUN0QyxNQUFNLFlBQVksR0FBVyxDQUFDLENBQUM7SUFpQmxCLFlBQVksU0FBWixZQUFZO0lBbUd2QixZQUNVLE1BQWMsRUFDdEIsU0FBNkIsRUFDckIsT0FBb0IsRUFDcEIsUUFBa0Is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QixDQUFDLElBQUk7YUFDdEM7Ozs7WUFuQ0MsTUFBTTtZQVFDLGtCQUFrQjtZQUVsQixXQUFXO1lBcEJYLFFBQVE7WUFNZixVQUFVOzRDQWlKUCxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7OztrQkEzRTdCLEtBQUs7aUJBSUwsS0FBSztzQkFRTCxLQUFLO3lCQUlMLEtBQUs7NEJBT0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBSUwsS0FBSzt1QkFDTCxLQUFLO3lCQU9MLEtBQUs7aUNBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLE1BQU07O0FBckNQO0lBREMsV0FBVyxFQUFFOzs7c0NBTWI7QUFDd0I7SUFBZixZQUFZLEVBQUU7OzsyQ0FHdkI7QUFDd0I7SUFBZixZQUFZLEVBQUU7Ozs4Q0FNdkI7QUFFd0I7SUFBZixZQUFZLEVBQUU7O2lEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7aURBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOztrREFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7OytDQUFtQjtBQUNuQjtJQUFkLFdBQVcsRUFBRTs7O3dDQUd0QjtBQUV1QjtJQUFkLFdBQVcsRUFBRTs7OzRDQU10QjtBQUN3QjtJQUFmLFlBQVksRUFBRTs7Z0RBQW1CO0FBRW5CO0lBQWQsV0FBVyxFQUFFOzsyQ0FBZTtBQXhFM0IsWUFBWTtJQWZ4QixZQUFZLEVBQUU7cUNBbUhLLE1BQU07UUFDWCxrQkFBa0I7UUFDWixXQUFXO1FBQ1YsUUFBUTtRQUNkLFVBQVU7R0F4R2IsWUFBWSxDQStZeEI7U0EvWVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQREZfREVGVUxBVF9DT05GSUcgfSBmcm9tICcuL3BkZi5jb25maWcnO1xuaW1wb3J0IHsgUGRmQ2hhbmdlRXZlbnQsIFBkZkNoYW5nZUV2ZW50VHlwZSwgUGRmRXh0ZXJuYWxMaW5rVGFyZ2V0LCBQZGZUZXh0TGF5ZXJNb2RlLCBQZGZab29tU2NhbGUgfSBmcm9tICcuL3BkZi50eXBlcyc7XG5cbmNvbnN0IENTU19VTklUUzogbnVtYmVyID0gOTYuMCAvIDcyLjA7XG5jb25zdCBCT1JERVJfV0lEVEg6IG51bWJlciA9IDk7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmJyxcbiAgZXhwb3J0QXM6ICdwZGYnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuei1za2VsZXRvbiAqbmdJZj1cIiFpbml0ZWRcIj48L256LXNrZWxldG9uPlxuICAgIDxkaXYgY2xhc3M9XCJwZGZWaWV3ZXJcIj48L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucGRmLWNvbnRhaW5lcl0nOiBgdHJ1ZWAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd0FsbFBhZ2VzOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdGlja1RvUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3JpZ2luYWxTaXplOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXRUb1BhZ2U6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVUZXh0TGF5ZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlbW92ZVBhZ2VCb3JkZXJzOiBCb29sZWFuSW5wdXQ7XG5cbiAgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbGliOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfcGRmOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbG9hZGluZ1Rhc2s6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBfc3JjOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbGFzdFNyYzogc3RyaW5nO1xuICBwcml2YXRlIF9waSA9IDE7XG4gIHByaXZhdGUgX3RvdGFsID0gMDtcbiAgcHJpdmF0ZSBfc2hvd0FsbCA9IHRydWU7XG4gIHByaXZhdGUgX3JvdGF0aW9uID0gMDtcbiAgcHJpdmF0ZSBfem9vbSA9IDE7XG4gIHByaXZhdGUgX3JlbmRlclRleHQgPSB0cnVlO1xuXG4gIHByaXZhdGUgbXVsdGlQYWdlVmlld2VyOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbXVsdGlQYWdlTGlua1NlcnZpY2U6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBtdWx0aVBhZ2VGaW5kQ29udHJvbGxlcjogTnpTYWZlQW55O1xuICBwcml2YXRlIHNpbmdsZVBhZ2VWaWV3ZXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlTGlua1NlcnZpY2U6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlRmluZENvbnRyb2xsZXI6IE56U2FmZUFueTtcblxuICBASW5wdXQoKSBzZXQgc3JjKGRhdGFPckJ1ZmZlcjogTnpTYWZlQW55KSB7XG4gICAgdGhpcy5fc3JjID0gZGF0YU9yQnVmZmVyO1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHNldCBwaSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3BpID0gdGhpcy5nZXRWYWxpZFBpKHZhbCk7XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnNjcm9sbFBhZ2VJbnRvVmlldyh7IHBhZ2VOdW1iZXI6IHRoaXMuX3BpIH0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2V0IHNob3dBbGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0FsbCA9IHZhbDtcbiAgICB0aGlzLnJlc2V0RG9jKCk7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCByZW5kZXJUZXh0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbmRlclRleHQgPSB2YWw7XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnRleHRMYXllck1vZGUgPSB0aGlzLl90ZXh0TGF5ZXJNb2RlO1xuICAgICAgdGhpcy5yZXNldERvYygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0ZXh0TGF5ZXJNb2RlOiBQZGZUZXh0TGF5ZXJNb2RlID0gUGRmVGV4dExheWVyTW9kZS5FTkFCTEU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Qm9yZGVycyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3RpY2tUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9yaWdpbmFsU2l6ZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXRUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHpvb20odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsIDw9IDApIHJldHVybjtcbiAgICB0aGlzLl96b29tID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIHpvb21TY2FsZTogUGRmWm9vbVNjYWxlID0gJ3BhZ2Utd2lkdGgnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzZXQgcm90YXRpb24odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICUgOTAgIT09IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCByb3RhdGlvbiBhbmdsZSwgc2hvdWxlIGJlIGRpdmlzaWJsZSBieSA5MC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcm90YXRpb24gPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9SZVNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBleHRlcm5hbExpbmtUYXJnZXQ6IFBkZkV4dGVybmFsTGlua1RhcmdldCA9IFBkZkV4dGVybmFsTGlua1RhcmdldC5CTEFOSztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IHBkZigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9wZGY7XG4gIH1cblxuICBnZXQgZmluZENvbnRyb2xsZXIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIgOiB0aGlzLnNpbmdsZVBhZ2VGaW5kQ29udHJvbGxlcjtcbiAgfVxuXG4gIGdldCBwYWdlVmlld2VyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbGwgPyB0aGlzLm11bHRpUGFnZVZpZXdlciA6IHRoaXMuc2luZ2xlUGFnZVZpZXdlcjtcbiAgfVxuXG4gIGdldCBsaW5rU2VydmljZSgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93QWxsID8gdGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZSA6IHRoaXMuc2luZ2xlUGFnZUxpbmtTZXJ2aWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RleHRMYXllck1vZGUoKTogUGRmVGV4dExheWVyTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlclRleHQgPyB0aGlzLnRleHRMYXllck1vZGUgOiBQZGZUZXh0TGF5ZXJNb2RlLkRJU0FCTEU7XG4gIH1cblxuICBwcml2YXRlIGdldCB3aW4oKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5kb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncGRmJywgUERGX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgY29uc3QgbGliID0gY29nLmxpYiE7XG4gICAgdGhpcy5saWIgPSBsaWIuZW5kc1dpdGgoJy8nKSA/IGxpYiA6IGAke2xpYn0vYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRQaShwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGkgPCAxKSByZXR1cm4gMTtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgcmV0dXJuIHBkZiAmJiBwaSA+IHBkZi5udW1QYWdlcyA/IHBkZi5udW1QYWdlcyA6IHBpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IFBkZkNoYW5nZUV2ZW50VHlwZSwgb3B0PzogUGRmQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBwZGY6IHRoaXMuX3BkZixcbiAgICAgICAgcGk6IHRoaXMuX3BpLFxuICAgICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICAgIC4uLm9wdCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy53aW4ucGRmanNMaWIuR2xvYmFsV29ya2VyT3B0aW9ucy53b3JrZXJTcmMgPSBgJHt0aGlzLmxpYn1idWlsZC9wZGYud29ya2VyLm1pbi5qc2A7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9zcmMgfSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmluaXRlZCB8fCAhX3NyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RTcmMgPT09IF9zcmMpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICBjb25zdCBsb2FkaW5nVGFzayA9ICh0aGlzLmxvYWRpbmdUYXNrID0gdGhpcy53aW4ucGRmanNMaWIuZ2V0RG9jdW1lbnQoX3NyYykpO1xuICAgICAgbG9hZGluZ1Rhc2sub25Qcm9ncmVzcyA9IChwcm9ncmVzczogeyBsb2FkZWQ6IG51bWJlcjsgdG90YWw6IG51bWJlciB9KSA9PiB0aGlzLmVtaXQoJ2xvYWQtcHJvZ3Jlc3MnLCB7IHByb2dyZXNzIH0pO1xuICAgICAgbG9hZGluZ1Rhc2sucHJvbWlzZS50aGVuKFxuICAgICAgICAocGRmOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl9wZGYgPSBwZGY7XG4gICAgICAgICAgdGhpcy5sYXN0U3JjID0gX3NyYztcbiAgICAgICAgICB0aGlzLl90b3RhbCA9IHBkZi5udW1QYWdlcztcblxuICAgICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMucGFnZVZpZXdlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR1cFBhZ2VWaWV3ZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlc2V0RG9jKCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBOelNhZmVBbnkpID0+IHRoaXMuZW1pdCgnZXJyb3InLCB7IGVycm9yIH0pLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXREb2MoKTogdm9pZCB7XG4gICAgY29uc3QgcGRmID0gdGhpcy5fcGRmO1xuICAgIGlmICghcGRmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuY2xlYW5Eb2MoKTtcblxuICAgICAgdGhpcy5maW5kQ29udHJvbGxlci5zZXREb2N1bWVudChwZGYpO1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnNldERvY3VtZW50KHBkZik7XG4gICAgICB0aGlzLmxpbmtTZXJ2aWNlLnNldERvY3VtZW50KHBkZiwgbnVsbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuRG9jKCk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlQYWdlVmlld2VyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZVZpZXdlci5zZXREb2N1bWVudChudWxsKTtcblxuICAgIHRoaXMubXVsdGlQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG5cbiAgICB0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFZpZXdlciA9IHRoaXMucGFnZVZpZXdlcjtcbiAgICBpZiAoIWN1cnJlbnRWaWV3ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcm90YXRpb24gIT09IDAgfHwgY3VycmVudFZpZXdlci5wYWdlc1JvdGF0aW9uICE9PSB0aGlzLl9yb3RhdGlvbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHRoaXMuX3JvdGF0aW9uO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RpY2tUb1BhZ2UpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjdXJyZW50Vmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5fcGk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgICAgdGhpcy5fcGRmLmdldFBhZ2UoY3VycmVudFZpZXdlci5jdXJyZW50UGFnZU51bWJlcikudGhlbigocGFnZTogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgX3JvdGF0aW9uLCBfem9vbSB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBfcm90YXRpb24gfHwgcGFnZS5yb3RhdGU7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPVxuICAgICAgICAgIHBhZ2UuZ2V0Vmlld3BvcnQoe1xuICAgICAgICAgICAgc2NhbGU6IF96b29tLFxuICAgICAgICAgICAgcm90YXRpb24sXG4gICAgICAgICAgfSkud2lkdGggKiBDU1NfVU5JVFM7XG4gICAgICAgIGxldCBzY2FsZSA9IF96b29tO1xuICAgICAgICBsZXQgc3RpY2tUb1BhZ2UgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNjYWxlIHRoZSBkb2N1bWVudCB3aGVuIGl0IHNob3VsZG4ndCBiZSBpbiBvcmlnaW5hbCBzaXplIG9yIGRvZXNuJ3QgZml0IGludG8gdGhlIHZpZXdwb3J0XG4gICAgICAgIGlmICghdGhpcy5vcmlnaW5hbFNpemUgfHwgKHRoaXMuZml0VG9QYWdlICYmIHZpZXdwb3J0V2lkdGggPiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpKSB7XG4gICAgICAgICAgY29uc3Qgdmlld1BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IDEsIHJvdGF0aW9uIH0pO1xuICAgICAgICAgIHNjYWxlID0gdGhpcy5nZXRTY2FsZSh2aWV3UG9ydC53aWR0aCwgdmlld1BvcnQuaGVpZ2h0KTtcbiAgICAgICAgICBzdGlja1RvUGFnZSA9ICF0aGlzLnN0aWNrVG9QYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFZpZXdlci5fc2V0U2NhbGUoc2NhbGUsIHN0aWNrVG9QYWdlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY2FsZSh2aWV3cG9ydFdpZHRoOiBudW1iZXIsIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGJvcmRlclNpemUgPSB0aGlzLnNob3dCb3JkZXJzID8gMiAqIEJPUkRFUl9XSURUSCA6IDA7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBlbC5jbGllbnRXaWR0aCAtIGJvcmRlclNpemU7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0IC0gYm9yZGVyU2l6ZTtcblxuICAgIGlmIChjb250YWluZXJIZWlnaHQgPT09IDAgfHwgdmlld3BvcnRIZWlnaHQgPT09IDAgfHwgY29udGFpbmVyV2lkdGggPT09IDAgfHwgdmlld3BvcnRXaWR0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgbGV0IHJhdGlvID0gMTtcbiAgICBzd2l0Y2ggKHRoaXMuem9vbVNjYWxlKSB7XG4gICAgICBjYXNlICdwYWdlLWZpdCc6XG4gICAgICAgIHJhdGlvID0gTWF0aC5taW4oY29udGFpbmVySGVpZ2h0IC8gdmlld3BvcnRIZWlnaHQsIGNvbnRhaW5lcldpZHRoIC8gdmlld3BvcnRXaWR0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZS1oZWlnaHQnOlxuICAgICAgICByYXRpbyA9IGNvbnRhaW5lckhlaWdodCAvIHZpZXdwb3J0SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhZ2Utd2lkdGgnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmF0aW8gPSBjb250YWluZXJXaWR0aCAvIHZpZXdwb3J0V2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5fem9vbSAqIHJhdGlvKSAvIENTU19VTklUUztcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB7IGxvYWRpbmdUYXNrIH0gPSB0aGlzO1xuICAgICAgaWYgKGxvYWRpbmdUYXNrICYmICFsb2FkaW5nVGFzay5kZXN0cm95ZWQpIHtcbiAgICAgICAgbG9hZGluZ1Rhc2suZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgICB0aGlzLl9wZGYuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl9wZGYgPSBudWxsO1xuICAgICAgICB0aGlzLmNsZWFuRG9jKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICB0aGlzLndpbi5wZGZqc0xpYi5kaXNhYmxlVGV4dExheWVyID0gIXRoaXMuX3JlbmRlclRleHQ7XG4gICAgdGhpcy53aW4ucGRmanNMaWIuZXh0ZXJuYWxMaW5rVGFyZ2V0ID0gdGhpcy5leHRlcm5hbExpbmtUYXJnZXQ7XG5cbiAgICB0aGlzLnNldHVwTXVsdGlQYWdlVmlld2VyKCk7XG4gICAgdGhpcy5zZXR1cFNpbmdsZVBhZ2VWaWV3ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRXZlbnRCdXMoKTogTnpTYWZlQW55IHtcbiAgICBjb25zdCBldmVudEJ1cyA9IG5ldyB0aGlzLndpbi5wZGZqc1ZpZXdlci5FdmVudEJ1cygpO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlc2luaXRgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCdwYWdlcy1pbml0JywgeyBldiB9KTtcbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgcGFnZXJlbmRlcmVkYCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgncGFnZS1yZW5kZXJlZCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VjaGFuZ2luZ2AsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICBjb25zdCBub3dQaSA9IGV2LnBhZ2VOdW1iZXI7XG4gICAgICBpZiAobm93UGkgIT09IHRoaXMuX3BpKSB7XG4gICAgICAgIHRoaXMuX3BpID0gbm93UGk7XG4gICAgICAgIHRoaXMuZW1pdCgncGknLCB7IGV2IH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGB0ZXh0bGF5ZXJyZW5kZXJlZGAsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3RleHQtbGF5ZXItcmVuZGVyZWQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudEJ1cztcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBNdWx0aVBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgVklFV0VSID0gdGhpcy53aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLm11bHRpUGFnZUxpbmtTZXJ2aWNlID0gbmV3IFZJRVdFUi5QREZMaW5rU2VydmljZSh7XG4gICAgICBldmVudEJ1cyxcbiAgICB9KSk7XG4gICAgY29uc3QgZmluZENvbnRyb2xsZXIgPSAodGhpcy5tdWx0aVBhZ2VGaW5kQ29udHJvbGxlciA9IG5ldyBWSUVXRVIuUERGRmluZENvbnRyb2xsZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCB2aWV3ZXIgPSAodGhpcy5tdWx0aVBhZ2VWaWV3ZXIgPSBuZXcgVklFV0VSLlBERlZpZXdlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVtb3ZlUGFnZUJvcmRlcnM6ICF0aGlzLnNob3dCb3JkZXJzLFxuICAgICAgdGV4dExheWVyTW9kZTogdGhpcy5fdGV4dExheWVyTW9kZSxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgICAgZmluZENvbnRyb2xsZXIsXG4gICAgfSkpO1xuICAgIGxpbmtTZXJ2aWNlLnNldFZpZXdlcih2aWV3ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFNpbmdsZVBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgVklFV0VSID0gdGhpcy53aW4ucGRmanNWaWV3ZXI7XG5cbiAgICBjb25zdCBldmVudEJ1cyA9IHRoaXMuY3JlYXRlRXZlbnRCdXMoKTtcbiAgICBjb25zdCBsaW5rU2VydmljZSA9ICh0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZSA9IG5ldyBWSUVXRVIuUERGTGlua1NlcnZpY2Uoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgfSkpO1xuICAgIGNvbnN0IGZpbmRDb250cm9sbGVyID0gKHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyID0gbmV3IFZJRVdFUi5QREZGaW5kQ29udHJvbGxlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHBhZ2VWaWV3ZXIgPSAodGhpcy5zaW5nbGVQYWdlVmlld2VyID0gbmV3IFZJRVdFUi5QREZTaW5nbGVQYWdlVmlld2VyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgY29udGFpbmVyOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogIXRoaXMuc2hvd0JvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlcixcbiAgICB9KSk7XG4gICAgbGlua1NlcnZpY2Uuc2V0Vmlld2VyKHBhZ2VWaWV3ZXIpO1xuICAgIHBhZ2VWaWV3ZXIuX2N1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5fcGk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy53aW4ucGRmanNMaWIpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbGliIH0gPSB0aGlzO1xuICAgIHRoaXMubGF6eVNydlxuICAgICAgLmxvYWQoYCR7bGlifWJ1aWxkL3BkZi5taW4uanNgKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5U3J2LmxvYWQoW2Ake2xpYn13ZWIvcGRmX3ZpZXdlci5qc2AsIGAke2xpYn13ZWIvcGRmX3ZpZXdlci5jc3NgXSkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuaW5pdFJlc2l6ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFJlc2l6ZSgpOiB2b2lkIHtcbiAgICBmcm9tRXZlbnQodGhpcy53aW4sICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVTaXplICYmIHRoaXMuX3BkZiksXG4gICAgICAgIHVudGlsRGVzdHJveWVkKHRoaXMpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVNpemUoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIFBkZkNvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCAmJiAhY2hhbmdlcy5zcmMpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==