import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfExternalLinkTarget, PdfTextLayerMode } from './pdf.types';
const CSS_UNITS = 96.0 / 72.0;
const BORDER_WIDTH = 9;
export class PdfComponent {
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
            if (!this.originalSize || (this.fitToPage && viewportWidth > this.el.nativeElement.clientWidth)) {
                const viewPort = page.getViewport({ scale: 1, rotation });
                scale = this.getScale(viewPort.width, viewPort.height);
                stickToPage = !this.stickToPage;
            }
            currentViewer._setScale(scale, stickToPage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wZGYvcGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBc0MscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBRXhILE1BQU0sU0FBUyxHQUFXLElBQUksR0FBRyxJQUFJLENBQUM7QUFDdEMsTUFBTSxZQUFZLEdBQVcsQ0FBQyxDQUFDO0FBZ0IvQixNQUFNLE9BQU8sWUFBWTtJQW9HdkIsWUFDVSxNQUFjLEVBQ3RCLFNBQTZCLEVBQ3JCLE9BQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLEVBQTJCLEVBQ0csR0FBUTtR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SzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUlMLEtBQUs7dUJBQ0wsS0FBSzt5QkFPTCxLQUFLO2lDQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxNQUFNOztBQXJDUDtJQURDLFdBQVcsRUFBRTs7O3NDQU1iO0FBQ3dCO0lBQWYsWUFBWSxFQUFFOzs7MkNBR3ZCO0FBQ3dCO0lBQWYsWUFBWSxFQUFFOzs7OENBTXZCO0FBRXdCO0lBQWYsWUFBWSxFQUFFOztpREFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7O2lEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTs7a0RBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOzsrQ0FBbUI7QUFDbkI7SUFBZCxXQUFXLEVBQUU7Ozt3Q0FHdEI7QUFFdUI7SUFBZCxXQUFXLEVBQUU7Ozs0Q0FNdEI7QUFDd0I7SUFBZixZQUFZLEVBQUU7O2dEQUFtQjtBQUVuQjtJQUFkLFdBQVcsRUFBRTs7MkNBQWU7QUFvRXRDO0lBREMsV0FBVyxFQUFFOzs7O3dDQWdDYjtBQUdEO0lBREMsV0FBVyxFQUFFOzs7OzRDQVdiO0FBbUNEO0lBREMsV0FBVyxFQUFFOzs7OzhDQXVCYjtBQThCRDtJQURDLFdBQVcsRUFBRTs7OzsyQ0FXYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUERGX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9wZGYuY29uZmlnJztcbmltcG9ydCB7IFBkZkNoYW5nZUV2ZW50LCBQZGZDaGFuZ2VFdmVudFR5cGUsIFBkZkV4dGVybmFsTGlua1RhcmdldCwgUGRmVGV4dExheWVyTW9kZSwgUGRmWm9vbVNjYWxlIH0gZnJvbSAnLi9wZGYudHlwZXMnO1xuXG5jb25zdCBDU1NfVU5JVFM6IG51bWJlciA9IDk2LjAgLyA3Mi4wO1xuY29uc3QgQk9SREVSX1dJRFRIOiBudW1iZXIgPSA5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYnLFxuICBleHBvcnRBczogJ3BkZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWluaXRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPGRpdiBjbGFzcz1cInBkZlZpZXdlclwiPjwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5wZGYtY29udGFpbmVyXSc6IGB0cnVlYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9waTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93QWxsUGFnZXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNrVG9QYWdlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vcmlnaW5hbFNpemU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpdFRvUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZVRleHRMYXllcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVtb3ZlUGFnZUJvcmRlcnM6IEJvb2xlYW5JbnB1dDtcblxuICBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxpYjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3BkZjogTnpTYWZlQW55O1xuICBwcml2YXRlIGxvYWRpbmdUYXNrOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgX3NyYzogTnpTYWZlQW55O1xuICBwcml2YXRlIGxhc3RTcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGkgPSAxO1xuICBwcml2YXRlIF90b3RhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dBbGwgPSB0cnVlO1xuICBwcml2YXRlIF9yb3RhdGlvbiA9IDA7XG4gIHByaXZhdGUgX3pvb20gPSAxO1xuICBwcml2YXRlIF9yZW5kZXJUZXh0ID0gdHJ1ZTtcblxuICBwcml2YXRlIG11bHRpUGFnZVZpZXdlcjogTnpTYWZlQW55O1xuICBwcml2YXRlIG11bHRpUGFnZUxpbmtTZXJ2aWNlOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbXVsdGlQYWdlRmluZENvbnRyb2xsZXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlVmlld2VyOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUxpbmtTZXJ2aWNlOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyOiBOelNhZmVBbnk7XG5cbiAgQElucHV0KCkgc2V0IHNyYyhkYXRhT3JCdWZmZXI6IE56U2FmZUFueSkge1xuICAgIHRoaXMuX3NyYyA9IGRhdGFPckJ1ZmZlcjtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBzZXQgcGkodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9waSA9IHRoaXMuZ2V0VmFsaWRQaSh2YWwpO1xuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdlci5zY3JvbGxQYWdlSW50b1ZpZXcoeyBwYWdlTnVtYmVyOiB0aGlzLl9waSB9KTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCBzaG93QWxsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dBbGwgPSB2YWw7XG4gICAgdGhpcy5yZXNldERvYygpO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZXQgcmVuZGVyVGV4dCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW5kZXJUZXh0ID0gdmFsO1xuICAgIGlmICh0aGlzLl9wZGYpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdlci50ZXh0TGF5ZXJNb2RlID0gdGhpcy5fdGV4dExheWVyTW9kZTtcbiAgICAgIHRoaXMucmVzZXREb2MoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgdGV4dExheWVyTW9kZTogUGRmVGV4dExheWVyTW9kZSA9IFBkZlRleHRMYXllck1vZGUuRU5BQkxFO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0JvcmRlcnMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN0aWNrVG9QYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcmlnaW5hbFNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0VG9QYWdlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNldCB6b29tKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCA8PSAwKSByZXR1cm47XG4gICAgdGhpcy5fem9vbSA9IHZhbDtcbiAgfVxuICBASW5wdXQoKSB6b29tU2NhbGU6IFBkZlpvb21TY2FsZSA9ICdwYWdlLXdpZHRoJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHJvdGF0aW9uKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAlIDkwICE9PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm90YXRpb24gYW5nbGUsIHNob3VsZSBiZSBkaXZpc2libGUgYnkgOTAuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JvdGF0aW9uID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvUmVTaXplID0gdHJ1ZTtcbiAgQElucHV0KCkgZXh0ZXJuYWxMaW5rVGFyZ2V0OiBQZGZFeHRlcm5hbExpbmtUYXJnZXQgPSBQZGZFeHRlcm5hbExpbmtUYXJnZXQuQkxBTks7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5OiBudW1iZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCBwZGYoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGRmO1xuICB9XG5cbiAgZ2V0IGZpbmRDb250cm9sbGVyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbGwgPyB0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyIDogdGhpcy5zaW5nbGVQYWdlRmluZENvbnRyb2xsZXI7XG4gIH1cblxuICBnZXQgcGFnZVZpZXdlcigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93QWxsID8gdGhpcy5tdWx0aVBhZ2VWaWV3ZXIgOiB0aGlzLnNpbmdsZVBhZ2VWaWV3ZXI7XG4gIH1cblxuICBnZXQgbGlua1NlcnZpY2UoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlTGlua1NlcnZpY2UgOiB0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90ZXh0TGF5ZXJNb2RlKCk6IFBkZlRleHRMYXllck1vZGUge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJUZXh0ID8gdGhpcy50ZXh0TGF5ZXJNb2RlIDogUGRmVGV4dExheWVyTW9kZS5ESVNBQkxFO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgd2luKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXp5U3J2OiBMYXp5U2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICBjb25zdCBjb2cgPSBjb25maWdTcnYubWVyZ2UoJ3BkZicsIFBERl9ERUZVTEFUX0NPTkZJRykhO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcblxuICAgIGNvbnN0IGxpYiA9IGNvZy5saWIhO1xuICAgIHRoaXMubGliID0gbGliLmVuZHNXaXRoKCcvJykgPyBsaWIgOiBgJHtsaWJ9L2A7XG4gIH1cblxuICBwcml2YXRlIGdldFZhbGlkUGkocGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHBpIDwgMSkgcmV0dXJuIDE7XG4gICAgY29uc3QgcGRmID0gdGhpcy5fcGRmO1xuICAgIHJldHVybiBwZGYgJiYgcGkgPiBwZGYubnVtUGFnZXMgPyBwZGYubnVtUGFnZXMgOiBwaTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdCh0eXBlOiBQZGZDaGFuZ2VFdmVudFR5cGUsIG9wdD86IFBkZkNoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgcGRmOiB0aGlzLl9wZGYsXG4gICAgICAgIHBpOiB0aGlzLl9waSxcbiAgICAgICAgdG90YWw6IHRoaXMuX3RvdGFsLFxuICAgICAgICAuLi5vcHQsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMud2luLnBkZmpzTGliLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gYCR7dGhpcy5saWJ9YnVpbGQvcGRmLndvcmtlci5taW4uanNgO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfc3JjIH0gPSB0aGlzO1xuICAgIGlmICghdGhpcy5pbml0ZWQgfHwgIV9zcmMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0U3JjID09PSBfc3JjKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIGNvbnN0IGxvYWRpbmdUYXNrID0gKHRoaXMubG9hZGluZ1Rhc2sgPSB0aGlzLndpbi5wZGZqc0xpYi5nZXREb2N1bWVudChfc3JjKSk7XG4gICAgbG9hZGluZ1Rhc2sub25Qcm9ncmVzcyA9IChwcm9ncmVzczogeyBsb2FkZWQ6IG51bWJlcjsgdG90YWw6IG51bWJlciB9KSA9PiB0aGlzLmVtaXQoJ2xvYWQtcHJvZ3Jlc3MnLCB7IHByb2dyZXNzIH0pO1xuICAgIGxvYWRpbmdUYXNrLnByb21pc2UudGhlbihcbiAgICAgIChwZGY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICB0aGlzLl9wZGYgPSBwZGY7XG4gICAgICAgIHRoaXMubGFzdFNyYyA9IF9zcmM7XG4gICAgICAgIHRoaXMuX3RvdGFsID0gcGRmLm51bVBhZ2VzO1xuXG4gICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBhZ2VWaWV3ZXIpIHtcbiAgICAgICAgICB0aGlzLnNldHVwUGFnZVZpZXdlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldERvYygpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogTnpTYWZlQW55KSA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgeyBlcnJvciB9KSxcbiAgICApO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSByZXNldERvYygpOiB2b2lkIHtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgaWYgKCFwZGYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhbkRvYygpO1xuXG4gICAgdGhpcy5maW5kQ29udHJvbGxlci5zZXREb2N1bWVudChwZGYpO1xuICAgIHRoaXMucGFnZVZpZXdlci5zZXREb2N1bWVudChwZGYpO1xuICAgIHRoaXMubGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQocGRmLCBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Eb2MoKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aVBhZ2VWaWV3ZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlVmlld2VyLnNldERvY3VtZW50KG51bGwpO1xuXG4gICAgdGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZS5zZXREb2N1bWVudChudWxsLCBudWxsKTtcbiAgICB0aGlzLnNpbmdsZVBhZ2VMaW5rU2VydmljZS5zZXREb2N1bWVudChudWxsLCBudWxsKTtcblxuICAgIHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlRmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgIGlmICghY3VycmVudFZpZXdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yb3RhdGlvbiAhPT0gMCB8fCBjdXJyZW50Vmlld2VyLnBhZ2VzUm90YXRpb24gIT09IHRoaXMuX3JvdGF0aW9uKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3VycmVudFZpZXdlci5wYWdlc1JvdGF0aW9uID0gdGhpcy5fcm90YXRpb247XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGlja1RvUGFnZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLl9waTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSB1cGRhdGVTaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRWaWV3ZXIgPSB0aGlzLnBhZ2VWaWV3ZXI7XG4gICAgdGhpcy5fcGRmLmdldFBhZ2UoY3VycmVudFZpZXdlci5jdXJyZW50UGFnZU51bWJlcikudGhlbigocGFnZTogTnpTYWZlQW55KSA9PiB7XG4gICAgICBjb25zdCB7IF9yb3RhdGlvbiwgX3pvb20gfSA9IHRoaXM7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IF9yb3RhdGlvbiB8fCBwYWdlLnJvdGF0ZTtcbiAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPVxuICAgICAgICBwYWdlLmdldFZpZXdwb3J0KHtcbiAgICAgICAgICBzY2FsZTogX3pvb20sXG4gICAgICAgICAgcm90YXRpb24sXG4gICAgICAgIH0pLndpZHRoICogQ1NTX1VOSVRTO1xuICAgICAgbGV0IHNjYWxlID0gX3pvb207XG4gICAgICBsZXQgc3RpY2tUb1BhZ2UgPSB0cnVlO1xuXG4gICAgICAvLyBTY2FsZSB0aGUgZG9jdW1lbnQgd2hlbiBpdCBzaG91bGRuJ3QgYmUgaW4gb3JpZ2luYWwgc2l6ZSBvciBkb2Vzbid0IGZpdCBpbnRvIHRoZSB2aWV3cG9ydFxuICAgICAgaWYgKCF0aGlzLm9yaWdpbmFsU2l6ZSB8fCAodGhpcy5maXRUb1BhZ2UgJiYgdmlld3BvcnRXaWR0aCA+IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgY29uc3Qgdmlld1BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IDEsIHJvdGF0aW9uIH0pO1xuICAgICAgICBzY2FsZSA9IHRoaXMuZ2V0U2NhbGUodmlld1BvcnQud2lkdGgsIHZpZXdQb3J0LmhlaWdodCk7XG4gICAgICAgIHN0aWNrVG9QYWdlID0gIXRoaXMuc3RpY2tUb1BhZ2U7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRWaWV3ZXIuX3NldFNjYWxlKHNjYWxlLCBzdGlja1RvUGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNjYWxlKHZpZXdwb3J0V2lkdGg6IG51bWJlciwgdmlld3BvcnRIZWlnaHQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgYm9yZGVyU2l6ZSA9IHRoaXMuc2hvd0JvcmRlcnMgPyAyICogQk9SREVSX1dJRFRIIDogMDtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGVsLmNsaWVudFdpZHRoIC0gYm9yZGVyU2l6ZTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQgLSBib3JkZXJTaXplO1xuXG4gICAgaWYgKGNvbnRhaW5lckhlaWdodCA9PT0gMCB8fCB2aWV3cG9ydEhlaWdodCA9PT0gMCB8fCBjb250YWluZXJXaWR0aCA9PT0gMCB8fCB2aWV3cG9ydFdpZHRoID09PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBsZXQgcmF0aW8gPSAxO1xuICAgIHN3aXRjaCAodGhpcy56b29tU2NhbGUpIHtcbiAgICAgIGNhc2UgJ3BhZ2UtZml0JzpcbiAgICAgICAgcmF0aW8gPSBNYXRoLm1pbihjb250YWluZXJIZWlnaHQgLyB2aWV3cG9ydEhlaWdodCwgY29udGFpbmVyV2lkdGggLyB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYWdlLWhlaWdodCc6XG4gICAgICAgIHJhdGlvID0gY29udGFpbmVySGVpZ2h0IC8gdmlld3BvcnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZS13aWR0aCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByYXRpbyA9IGNvbnRhaW5lcldpZHRoIC8gdmlld3BvcnRXaWR0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLl96b29tICogcmF0aW8pIC8gQ1NTX1VOSVRTO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbG9hZGluZ1Rhc2sgfSA9IHRoaXM7XG4gICAgaWYgKGxvYWRpbmdUYXNrICYmICFsb2FkaW5nVGFzay5kZXN0cm95ZWQpIHtcbiAgICAgIGxvYWRpbmdUYXNrLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5fcGRmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX3BkZiA9IG51bGw7XG4gICAgICB0aGlzLmNsZWFuRG9jKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgdGhpcy53aW4ucGRmanNMaWIuZGlzYWJsZVRleHRMYXllciA9ICF0aGlzLl9yZW5kZXJUZXh0O1xuICAgIHRoaXMud2luLnBkZmpzTGliLmV4dGVybmFsTGlua1RhcmdldCA9IHRoaXMuZXh0ZXJuYWxMaW5rVGFyZ2V0O1xuXG4gICAgdGhpcy5zZXR1cE11bHRpUGFnZVZpZXdlcigpO1xuICAgIHRoaXMuc2V0dXBTaW5nbGVQYWdlVmlld2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUV2ZW50QnVzKCk6IE56U2FmZUFueSB7XG4gICAgY29uc3QgZXZlbnRCdXMgPSBuZXcgdGhpcy53aW4ucGRmanNWaWV3ZXIuRXZlbnRCdXMoKTtcbiAgICBldmVudEJ1cy5vbihgcGFnZXNpbml0YCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgncGFnZXMtaW5pdCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VyZW5kZXJlZGAsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3BhZ2UtcmVuZGVyZWQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlY2hhbmdpbmdgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgY29uc3Qgbm93UGkgPSBldi5wYWdlTnVtYmVyO1xuICAgICAgaWYgKG5vd1BpICE9PSB0aGlzLl9waSkge1xuICAgICAgICB0aGlzLl9waSA9IG5vd1BpO1xuICAgICAgICB0aGlzLmVtaXQoJ3BpJywgeyBldiB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgdGV4dGxheWVycmVuZGVyZWRgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCd0ZXh0LWxheWVyLXJlbmRlcmVkJywgeyBldiB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXZlbnRCdXM7XG4gIH1cblxuICBwcml2YXRlIHNldHVwTXVsdGlQYWdlVmlld2VyKCk6IHZvaWQge1xuICAgIGNvbnN0IFZJRVdFUiA9IHRoaXMud2luLnBkZmpzVmlld2VyO1xuXG4gICAgY29uc3QgZXZlbnRCdXMgPSB0aGlzLmNyZWF0ZUV2ZW50QnVzKCk7XG4gICAgY29uc3QgbGlua1NlcnZpY2UgPSAodGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZSA9IG5ldyBWSUVXRVIuUERGTGlua1NlcnZpY2Uoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgfSkpO1xuICAgIGNvbnN0IGZpbmRDb250cm9sbGVyID0gKHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIgPSBuZXcgVklFV0VSLlBERkZpbmRDb250cm9sbGVyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgfSkpO1xuXG4gICAgY29uc3Qgdmlld2VyID0gKHRoaXMubXVsdGlQYWdlVmlld2VyID0gbmV3IFZJRVdFUi5QREZWaWV3ZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBjb250YWluZXI6IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHJlbW92ZVBhZ2VCb3JkZXJzOiAhdGhpcy5zaG93Qm9yZGVycyxcbiAgICAgIHRleHRMYXllck1vZGU6IHRoaXMuX3RleHRMYXllck1vZGUsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICAgIGZpbmRDb250cm9sbGVyLFxuICAgIH0pKTtcbiAgICBsaW5rU2VydmljZS5zZXRWaWV3ZXIodmlld2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBTaW5nbGVQYWdlVmlld2VyKCk6IHZvaWQge1xuICAgIGNvbnN0IFZJRVdFUiA9IHRoaXMud2luLnBkZmpzVmlld2VyO1xuXG4gICAgY29uc3QgZXZlbnRCdXMgPSB0aGlzLmNyZWF0ZUV2ZW50QnVzKCk7XG4gICAgY29uc3QgbGlua1NlcnZpY2UgPSAodGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2UgPSBuZXcgVklFV0VSLlBERkxpbmtTZXJ2aWNlKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgIH0pKTtcbiAgICBjb25zdCBmaW5kQ29udHJvbGxlciA9ICh0aGlzLnNpbmdsZVBhZ2VGaW5kQ29udHJvbGxlciA9IG5ldyBWSUVXRVIuUERGRmluZENvbnRyb2xsZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBsaW5rU2VydmljZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBwYWdlVmlld2VyID0gKHRoaXMuc2luZ2xlUGFnZVZpZXdlciA9IG5ldyBWSUVXRVIuUERGU2luZ2xlUGFnZVZpZXdlcih7XG4gICAgICBldmVudEJ1cyxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgcmVtb3ZlUGFnZUJvcmRlcnM6ICF0aGlzLnNob3dCb3JkZXJzLFxuICAgICAgdGV4dExheWVyTW9kZTogdGhpcy5fdGV4dExheWVyTW9kZSxcbiAgICAgIGxpbmtTZXJ2aWNlLFxuICAgICAgZmluZENvbnRyb2xsZXIsXG4gICAgfSkpO1xuICAgIGxpbmtTZXJ2aWNlLnNldFZpZXdlcihwYWdlVmlld2VyKTtcbiAgICBwYWdlVmlld2VyLl9jdXJyZW50UGFnZU51bWJlciA9IHRoaXMuX3BpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMud2luLnBkZmpzTGliKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IGxpYiB9ID0gdGhpcztcbiAgICB0aGlzLmxhenlTcnZcbiAgICAgIC5sb2FkKGAke2xpYn1idWlsZC9wZGYubWluLmpzYClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubGF6eVNydi5sb2FkKFtgJHtsaWJ9d2ViL3BkZl92aWV3ZXIuanNgLCBgJHtsaWJ9d2ViL3BkZl92aWV3ZXIuY3NzYF0pKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmluaXRSZXNpemUoKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRSZXNpemUoKTogdm9pZCB7XG4gICAgZnJvbUV2ZW50KHRoaXMud2luLCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuYXV0b1JlU2l6ZSAmJiB0aGlzLl9wZGYpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVNpemUoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwIGluIGtleW9mIFBkZkNvbXBvbmVudF0/OiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCAmJiAhY2hhbmdlcy5zcmMpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcblxuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=