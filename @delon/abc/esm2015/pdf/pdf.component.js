import { __decorate } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, ViewEncapsulation, } from '@angular/core';
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
        this.ngZone.run(() => this.change.emit(Object.assign({ type, pdf: this._pdf, pi: this._pi, total: this._total }, opt)));
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
    <nz-skeleton *ngIf="!inited || loading"></nz-skeleton>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wZGYvcGRmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFHTixRQUFRLEVBQ1IsTUFBTSxFQUVOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQXNDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUV4SCxNQUFNLFNBQVMsR0FBVyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLE1BQU0sWUFBWSxHQUFXLENBQUMsQ0FBQztBQWtCL0IsTUFBTSxPQUFPLFlBQVk7SUE2R3ZCLFlBQ1UsTUFBYyxFQUN0QixTQUE2QixFQUNyQixPQUFvQixFQUNwQixRQUFrQixFQUNsQixHQUE0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QUFmLFlBQVksRUFBRTtpREFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7a0RBQXFCO0FBQ3BCO0lBQWYsWUFBWSxFQUFFOytDQUFtQjtBQUNuQjtJQUFkLFdBQVcsRUFBRTt3Q0FHdEI7QUFFdUI7SUFBZCxXQUFXLEVBQUU7NENBTXRCO0FBQ3dCO0lBQWYsWUFBWSxFQUFFO2dEQUFtQjtBQUVuQjtJQUFkLFdBQVcsRUFBRTsyQ0FBZTtBQXFGdEM7SUFEQyxXQUFXLEVBQUU7d0NBdUNiO0FBR0Q7SUFEQyxXQUFXLEVBQUU7NENBV2I7QUFtQ0Q7SUFEQyxXQUFXLEVBQUU7OENBdUJiO0FBOEJEO0lBREMsV0FBVyxFQUFFOzJDQVdiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUERGX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9wZGYuY29uZmlnJztcbmltcG9ydCB7IFBkZkNoYW5nZUV2ZW50LCBQZGZDaGFuZ2VFdmVudFR5cGUsIFBkZkV4dGVybmFsTGlua1RhcmdldCwgUGRmVGV4dExheWVyTW9kZSwgUGRmWm9vbVNjYWxlIH0gZnJvbSAnLi9wZGYudHlwZXMnO1xuXG5jb25zdCBDU1NfVU5JVFM6IG51bWJlciA9IDk2LjAgLyA3Mi4wO1xuY29uc3QgQk9SREVSX1dJRFRIOiBudW1iZXIgPSA5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYnLFxuICBleHBvcnRBczogJ3BkZicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWluaXRlZCB8fCBsb2FkaW5nXCI+PC9uei1za2VsZXRvbj5cbiAgICA8ZGl2IGNsYXNzPVwicGRmLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBkZlZpZXdlclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kLWJsb2NrXSc6IGB0cnVlYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9waTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93QWxsUGFnZXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNrVG9QYWdlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vcmlnaW5hbFNpemU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpdFRvUGFnZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZVRleHRMYXllcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVtb3ZlUGFnZUJvcmRlcnM6IEJvb2xlYW5JbnB1dDtcblxuICBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGxpYjogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3BkZjogTnpTYWZlQW55O1xuICBwcml2YXRlIGxvYWRpbmdUYXNrOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgX3NyYzogTnpTYWZlQW55O1xuICBwcml2YXRlIGxhc3RTcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGkgPSAxO1xuICBwcml2YXRlIF90b3RhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dBbGwgPSB0cnVlO1xuICBwcml2YXRlIF9yb3RhdGlvbiA9IDA7XG4gIHByaXZhdGUgX3pvb20gPSAxO1xuICBwcml2YXRlIF9yZW5kZXJUZXh0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgbXVsdGlQYWdlVmlld2VyOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgbXVsdGlQYWdlTGlua1NlcnZpY2U6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBtdWx0aVBhZ2VGaW5kQ29udHJvbGxlcjogTnpTYWZlQW55O1xuICBwcml2YXRlIHNpbmdsZVBhZ2VWaWV3ZXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlTGlua1NlcnZpY2U6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBzaW5nbGVQYWdlRmluZENvbnRyb2xsZXI6IE56U2FmZUFueTtcblxuICBASW5wdXQoKSBzZXQgc3JjKGRhdGFPckJ1ZmZlcjogTnpTYWZlQW55KSB7XG4gICAgdGhpcy5fc3JjID0gZGF0YU9yQnVmZmVyO1xuICAgIHRoaXMubG9hZCgpO1xuICB9XG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHNldCBwaSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3BpID0gdGhpcy5nZXRWYWxpZFBpKHZhbCk7XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnNjcm9sbFBhZ2VJbnRvVmlldyh7IHBhZ2VOdW1iZXI6IHRoaXMuX3BpIH0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2V0IHNob3dBbGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0FsbCA9IHZhbDtcbiAgICB0aGlzLnJlc2V0RG9jKCk7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCByZW5kZXJUZXh0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbmRlclRleHQgPSB2YWw7XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5wYWdlVmlld2VyLnRleHRMYXllck1vZGUgPSB0aGlzLl90ZXh0TGF5ZXJNb2RlO1xuICAgICAgdGhpcy5yZXNldERvYygpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0ZXh0TGF5ZXJNb2RlOiBQZGZUZXh0TGF5ZXJNb2RlID0gUGRmVGV4dExheWVyTW9kZS5FTkFCTEU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Qm9yZGVycyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3RpY2tUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9yaWdpbmFsU2l6ZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXRUb1BhZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2V0IHpvb20odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsIDw9IDApIHJldHVybjtcbiAgICB0aGlzLl96b29tID0gdmFsO1xuICB9XG4gIEBJbnB1dCgpIHpvb21TY2FsZTogUGRmWm9vbVNjYWxlID0gJ3BhZ2Utd2lkdGgnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzZXQgcm90YXRpb24odmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICUgOTAgIT09IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCByb3RhdGlvbiBhbmdsZSwgc2hvdWxlIGJlIGRpdmlzaWJsZSBieSA5MC5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcm90YXRpb24gPSB2YWw7XG4gIH1cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9SZVNpemUgPSB0cnVlO1xuICBASW5wdXQoKSBleHRlcm5hbExpbmtUYXJnZXQ6IFBkZkV4dGVybmFsTGlua1RhcmdldCA9IFBkZkV4dGVybmFsTGlua1RhcmdldC5CTEFOSztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBnZXQgcGRmKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BkZjtcbiAgfVxuXG4gIGdldCBmaW5kQ29udHJvbGxlcigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9zaG93QWxsID8gdGhpcy5tdWx0aVBhZ2VGaW5kQ29udHJvbGxlciA6IHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyO1xuICB9XG5cbiAgZ2V0IHBhZ2VWaWV3ZXIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0FsbCA/IHRoaXMubXVsdGlQYWdlVmlld2VyIDogdGhpcy5zaW5nbGVQYWdlVmlld2VyO1xuICB9XG5cbiAgZ2V0IGxpbmtTZXJ2aWNlKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dBbGwgPyB0aGlzLm11bHRpUGFnZUxpbmtTZXJ2aWNlIDogdGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2U7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdGV4dExheWVyTW9kZSgpOiBQZGZUZXh0TGF5ZXJNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyVGV4dCA/IHRoaXMudGV4dExheWVyTW9kZSA6IFBkZlRleHRMYXllck1vZGUuRElTQUJMRTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHdpbigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLmRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBwcml2YXRlIGdldCBlbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBkZi1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXp5U3J2OiBMYXp5U2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIGNvbnN0IGNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncGRmJywgUERGX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgY29uc3QgbGliID0gY29nLmxpYiE7XG4gICAgdGhpcy5saWIgPSBsaWIuZW5kc1dpdGgoJy8nKSA/IGxpYiA6IGAke2xpYn0vYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRQaShwaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGkgPCAxKSByZXR1cm4gMTtcbiAgICBjb25zdCBwZGYgPSB0aGlzLl9wZGY7XG4gICAgcmV0dXJuIHBkZiAmJiBwaSA+IHBkZi5udW1QYWdlcyA/IHBkZi5udW1QYWdlcyA6IHBpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHR5cGU6IFBkZkNoYW5nZUV2ZW50VHlwZSwgb3B0PzogUGRmQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICB0eXBlLFxuICAgICAgICBwZGY6IHRoaXMuX3BkZixcbiAgICAgICAgcGk6IHRoaXMuX3BpLFxuICAgICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICAgIC4uLm9wdCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMud2luLnBkZmpzTGliLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gYCR7dGhpcy5saWJ9YnVpbGQvcGRmLndvcmtlci5taW4uanNgO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBzZXRMb2FkaW5nKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gc3RhdHVzO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBsb2FkKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX3NyYyB9ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuaW5pdGVkIHx8ICFfc3JjKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdFNyYyA9PT0gX3NyYykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IGxvYWRpbmdUYXNrID0gKHRoaXMubG9hZGluZ1Rhc2sgPSB0aGlzLndpbi5wZGZqc0xpYi5nZXREb2N1bWVudChfc3JjKSk7XG4gICAgbG9hZGluZ1Rhc2sub25Qcm9ncmVzcyA9IChwcm9ncmVzczogeyBsb2FkZWQ6IG51bWJlcjsgdG90YWw6IG51bWJlciB9KSA9PiB0aGlzLmVtaXQoJ2xvYWQtcHJvZ3Jlc3MnLCB7IHByb2dyZXNzIH0pO1xuICAgIChsb2FkaW5nVGFzay5wcm9taXNlIGFzIFByb21pc2VMaWtlPHZvaWQ+KVxuICAgICAgLnRoZW4oXG4gICAgICAgIChwZGY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BkZiA9IHBkZjtcbiAgICAgICAgICB0aGlzLmxhc3RTcmMgPSBfc3JjO1xuICAgICAgICAgIHRoaXMuX3RvdGFsID0gcGRmLm51bVBhZ2VzO1xuXG4gICAgICAgICAgdGhpcy5lbWl0KCdsb2FkZWQnKTtcblxuICAgICAgICAgIGlmICghdGhpcy5wYWdlVmlld2VyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwUGFnZVZpZXdlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucmVzZXREb2MoKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IE56U2FmZUFueSkgPT4gdGhpcy5lbWl0KCdlcnJvcicsIHsgZXJyb3IgfSksXG4gICAgICApXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldExvYWRpbmcoZmFsc2UpKTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgcmVzZXREb2MoKTogdm9pZCB7XG4gICAgY29uc3QgcGRmID0gdGhpcy5fcGRmO1xuICAgIGlmICghcGRmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYW5Eb2MoKTtcblxuICAgIHRoaXMuZmluZENvbnRyb2xsZXIuc2V0RG9jdW1lbnQocGRmKTtcbiAgICB0aGlzLnBhZ2VWaWV3ZXIuc2V0RG9jdW1lbnQocGRmKTtcbiAgICB0aGlzLmxpbmtTZXJ2aWNlLnNldERvY3VtZW50KHBkZiwgbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuRG9jKCk6IHZvaWQge1xuICAgIHRoaXMubXVsdGlQYWdlVmlld2VyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZVZpZXdlci5zZXREb2N1bWVudChudWxsKTtcblxuICAgIHRoaXMubXVsdGlQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG4gICAgdGhpcy5zaW5nbGVQYWdlTGlua1NlcnZpY2Uuc2V0RG9jdW1lbnQobnVsbCwgbnVsbCk7XG5cbiAgICB0aGlzLm11bHRpUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICAgIHRoaXMuc2luZ2xlUGFnZUZpbmRDb250cm9sbGVyLnNldERvY3VtZW50KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFZpZXdlciA9IHRoaXMucGFnZVZpZXdlcjtcbiAgICBpZiAoIWN1cnJlbnRWaWV3ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcm90YXRpb24gIT09IDAgfHwgY3VycmVudFZpZXdlci5wYWdlc1JvdGF0aW9uICE9PSB0aGlzLl9yb3RhdGlvbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHRoaXMuX3JvdGF0aW9uO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RpY2tUb1BhZ2UpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjdXJyZW50Vmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5fcGk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgdXBkYXRlU2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50Vmlld2VyID0gdGhpcy5wYWdlVmlld2VyO1xuICAgIHRoaXMuX3BkZi5nZXRQYWdlKGN1cnJlbnRWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIpLnRoZW4oKHBhZ2U6IE56U2FmZUFueSkgPT4ge1xuICAgICAgY29uc3QgeyBfcm90YXRpb24sIF96b29tIH0gPSB0aGlzO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBfcm90YXRpb24gfHwgcGFnZS5yb3RhdGU7XG4gICAgICBjb25zdCB2aWV3cG9ydFdpZHRoID1cbiAgICAgICAgcGFnZS5nZXRWaWV3cG9ydCh7XG4gICAgICAgICAgc2NhbGU6IF96b29tLFxuICAgICAgICAgIHJvdGF0aW9uLFxuICAgICAgICB9KS53aWR0aCAqIENTU19VTklUUztcbiAgICAgIGxldCBzY2FsZSA9IF96b29tO1xuICAgICAgbGV0IHN0aWNrVG9QYWdlID0gdHJ1ZTtcblxuICAgICAgLy8gU2NhbGUgdGhlIGRvY3VtZW50IHdoZW4gaXQgc2hvdWxkbid0IGJlIGluIG9yaWdpbmFsIHNpemUgb3IgZG9lc24ndCBmaXQgaW50byB0aGUgdmlld3BvcnRcbiAgICAgIGlmICghdGhpcy5vcmlnaW5hbFNpemUgfHwgKHRoaXMuZml0VG9QYWdlICYmIHZpZXdwb3J0V2lkdGggPiB0aGlzLmVsLmNsaWVudFdpZHRoKSkge1xuICAgICAgICBjb25zdCB2aWV3UG9ydCA9IHBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogMSwgcm90YXRpb24gfSk7XG4gICAgICAgIHNjYWxlID0gdGhpcy5nZXRTY2FsZSh2aWV3UG9ydC53aWR0aCwgdmlld1BvcnQuaGVpZ2h0KTtcbiAgICAgICAgc3RpY2tUb1BhZ2UgPSAhdGhpcy5zdGlja1RvUGFnZTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFZpZXdlci5fc2V0U2NhbGUoc2NhbGUsIHN0aWNrVG9QYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2NhbGUodmlld3BvcnRXaWR0aDogbnVtYmVyLCB2aWV3cG9ydEhlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBib3JkZXJTaXplID0gdGhpcy5zaG93Qm9yZGVycyA/IDIgKiBCT1JERVJfV0lEVEggOiAwO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGVsLmNsaWVudFdpZHRoIC0gYm9yZGVyU2l6ZTtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQgLSBib3JkZXJTaXplO1xuXG4gICAgaWYgKGNvbnRhaW5lckhlaWdodCA9PT0gMCB8fCB2aWV3cG9ydEhlaWdodCA9PT0gMCB8fCBjb250YWluZXJXaWR0aCA9PT0gMCB8fCB2aWV3cG9ydFdpZHRoID09PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBsZXQgcmF0aW8gPSAxO1xuICAgIHN3aXRjaCAodGhpcy56b29tU2NhbGUpIHtcbiAgICAgIGNhc2UgJ3BhZ2UtZml0JzpcbiAgICAgICAgcmF0aW8gPSBNYXRoLm1pbihjb250YWluZXJIZWlnaHQgLyB2aWV3cG9ydEhlaWdodCwgY29udGFpbmVyV2lkdGggLyB2aWV3cG9ydFdpZHRoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYWdlLWhlaWdodCc6XG4gICAgICAgIHJhdGlvID0gY29udGFpbmVySGVpZ2h0IC8gdmlld3BvcnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZS13aWR0aCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByYXRpbyA9IGNvbnRhaW5lcldpZHRoIC8gdmlld3BvcnRXaWR0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLl96b29tICogcmF0aW8pIC8gQ1NTX1VOSVRTO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbG9hZGluZ1Rhc2sgfSA9IHRoaXM7XG4gICAgaWYgKGxvYWRpbmdUYXNrICYmICFsb2FkaW5nVGFzay5kZXN0cm95ZWQpIHtcbiAgICAgIGxvYWRpbmdUYXNrLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BkZikge1xuICAgICAgdGhpcy5fcGRmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX3BkZiA9IG51bGw7XG4gICAgICB0aGlzLmNsZWFuRG9jKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFBhZ2VWaWV3ZXIoKTogdm9pZCB7XG4gICAgdGhpcy53aW4ucGRmanNMaWIuZGlzYWJsZVRleHRMYXllciA9ICF0aGlzLl9yZW5kZXJUZXh0O1xuICAgIHRoaXMud2luLnBkZmpzTGliLmV4dGVybmFsTGlua1RhcmdldCA9IHRoaXMuZXh0ZXJuYWxMaW5rVGFyZ2V0O1xuXG4gICAgdGhpcy5zZXR1cE11bHRpUGFnZVZpZXdlcigpO1xuICAgIHRoaXMuc2V0dXBTaW5nbGVQYWdlVmlld2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUV2ZW50QnVzKCk6IE56U2FmZUFueSB7XG4gICAgY29uc3QgZXZlbnRCdXMgPSBuZXcgdGhpcy53aW4ucGRmanNWaWV3ZXIuRXZlbnRCdXMoKTtcbiAgICBldmVudEJ1cy5vbihgcGFnZXNpbml0YCwgKGV2OiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHRoaXMuZW1pdCgncGFnZXMtaW5pdCcsIHsgZXYgfSk7XG4gICAgfSk7XG4gICAgZXZlbnRCdXMub24oYHBhZ2VyZW5kZXJlZGAsIChldjogTnpTYWZlQW55KSA9PiB7XG4gICAgICB0aGlzLmVtaXQoJ3BhZ2UtcmVuZGVyZWQnLCB7IGV2IH0pO1xuICAgIH0pO1xuICAgIGV2ZW50QnVzLm9uKGBwYWdlY2hhbmdpbmdgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgY29uc3Qgbm93UGkgPSBldi5wYWdlTnVtYmVyO1xuICAgICAgaWYgKG5vd1BpICE9PSB0aGlzLl9waSkge1xuICAgICAgICB0aGlzLl9waSA9IG5vd1BpO1xuICAgICAgICB0aGlzLmVtaXQoJ3BpJywgeyBldiB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBldmVudEJ1cy5vbihgdGV4dGxheWVycmVuZGVyZWRgLCAoZXY6IE56U2FmZUFueSkgPT4ge1xuICAgICAgdGhpcy5lbWl0KCd0ZXh0LWxheWVyLXJlbmRlcmVkJywgeyBldiB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXZlbnRCdXM7XG4gIH1cblxuICBwcml2YXRlIHNldHVwTXVsdGlQYWdlVmlld2VyKCk6IHZvaWQge1xuICAgIGNvbnN0IFZJRVdFUiA9IHRoaXMud2luLnBkZmpzVmlld2VyO1xuXG4gICAgY29uc3QgZXZlbnRCdXMgPSB0aGlzLmNyZWF0ZUV2ZW50QnVzKCk7XG4gICAgY29uc3QgbGlua1NlcnZpY2UgPSAodGhpcy5tdWx0aVBhZ2VMaW5rU2VydmljZSA9IG5ldyBWSUVXRVIuUERGTGlua1NlcnZpY2Uoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgfSkpO1xuICAgIGNvbnN0IGZpbmRDb250cm9sbGVyID0gKHRoaXMubXVsdGlQYWdlRmluZENvbnRyb2xsZXIgPSBuZXcgVklFV0VSLlBERkZpbmRDb250cm9sbGVyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgfSkpO1xuXG4gICAgY29uc3Qgdmlld2VyID0gKHRoaXMubXVsdGlQYWdlVmlld2VyID0gbmV3IFZJRVdFUi5QREZWaWV3ZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBjb250YWluZXI6IHRoaXMuZWwsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogIXRoaXMuc2hvd0JvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlcixcbiAgICB9KSk7XG4gICAgbGlua1NlcnZpY2Uuc2V0Vmlld2VyKHZpZXdlcik7XG4gIH1cblxuICBwcml2YXRlIHNldHVwU2luZ2xlUGFnZVZpZXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBWSUVXRVIgPSB0aGlzLndpbi5wZGZqc1ZpZXdlcjtcblxuICAgIGNvbnN0IGV2ZW50QnVzID0gdGhpcy5jcmVhdGVFdmVudEJ1cygpO1xuICAgIGNvbnN0IGxpbmtTZXJ2aWNlID0gKHRoaXMuc2luZ2xlUGFnZUxpbmtTZXJ2aWNlID0gbmV3IFZJRVdFUi5QREZMaW5rU2VydmljZSh7XG4gICAgICBldmVudEJ1cyxcbiAgICB9KSk7XG4gICAgY29uc3QgZmluZENvbnRyb2xsZXIgPSAodGhpcy5zaW5nbGVQYWdlRmluZENvbnRyb2xsZXIgPSBuZXcgVklFV0VSLlBERkZpbmRDb250cm9sbGVyKHtcbiAgICAgIGV2ZW50QnVzLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgfSkpO1xuXG4gICAgY29uc3QgcGFnZVZpZXdlciA9ICh0aGlzLnNpbmdsZVBhZ2VWaWV3ZXIgPSBuZXcgVklFV0VSLlBERlNpbmdsZVBhZ2VWaWV3ZXIoe1xuICAgICAgZXZlbnRCdXMsXG4gICAgICBjb250YWluZXI6IHRoaXMuZWwsXG4gICAgICByZW1vdmVQYWdlQm9yZGVyczogIXRoaXMuc2hvd0JvcmRlcnMsXG4gICAgICB0ZXh0TGF5ZXJNb2RlOiB0aGlzLl90ZXh0TGF5ZXJNb2RlLFxuICAgICAgbGlua1NlcnZpY2UsXG4gICAgICBmaW5kQ29udHJvbGxlcixcbiAgICB9KSk7XG4gICAgbGlua1NlcnZpY2Uuc2V0Vmlld2VyKHBhZ2VWaWV3ZXIpO1xuICAgIHBhZ2VWaWV3ZXIuX2N1cnJlbnRQYWdlTnVtYmVyID0gdGhpcy5fcGk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy53aW4ucGRmanNMaWIpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbGliIH0gPSB0aGlzO1xuICAgIHRoaXMubGF6eVNydlxuICAgICAgLmxvYWQoYCR7bGlifWJ1aWxkL3BkZi5taW4uanNgKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5U3J2LmxvYWQoW2Ake2xpYn13ZWIvcGRmX3ZpZXdlci5qc2AsIGAke2xpYn13ZWIvcGRmX3ZpZXdlci5jc3NgXSkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuaW5pdFJlc2l6ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFJlc2l6ZSgpOiB2b2lkIHtcbiAgICBmcm9tRXZlbnQodGhpcy53aW4sICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5hdXRvUmVTaXplICYmIHRoaXMuX3BkZiksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU2l6ZSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3AgaW4ga2V5b2YgUGRmQ29tcG9uZW50XT86IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkICYmICFjaGFuZ2VzLnNyYykge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuXG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==