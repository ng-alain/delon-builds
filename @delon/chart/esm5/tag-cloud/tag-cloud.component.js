/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
/**
 * @record
 */
export function G2TagCloudData() { }
if (false) {
    /** @type {?|undefined} */
    G2TagCloudData.prototype.x;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.value;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.category;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2TagCloudComponent = /** @class */ (function () {
    // #endregion
    function G2TagCloudComponent(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.height = 100;
        this.padding = 0;
        this.data = [];
    }
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.initTagCloud = /**
     * @return {?}
     */
    function () {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            drawShape: /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            function (cfg, container) {
                /** @type {?} */
                var attrs = tslib_1.__assign({ fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' }, cfg.style);
                return container.addShape('text', {
                    attrs: tslib_1.__assign({}, attrs, { x: cfg.x, y: cfg.y }),
                });
            },
        });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, padding = _a.padding, height = _a.height;
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            padding: padding,
            height: height,
        }));
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
        });
        chart.coord().reflect();
        chart
            .point()
            .position('x*y')
            .color('category')
            .shape('cloud')
            .tooltip('value*category');
        chart.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, data = _a.data;
        if (!chart || !data || data.length <= 0)
            return;
        chart.set('height', height);
        chart.set('padding', padding);
        chart.forceFit();
        /** @type {?} */
        var dv = new DataSet.View().source(data);
        /** @type {?} */
        var range = dv.range('value');
        /** @type {?} */
        var min = range[0];
        /** @type {?} */
        var max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [chart.get('width'), chart.get('height')],
            padding: padding,
            timeInterval: 5000,
            // max execute time
            rotate: function () {
                /** @type {?} */
                var random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize: function (d) { return (d.value ? ((d.value - min) / (max - min)) * (80 - 24) + 24 : 0); },
        });
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false },
        });
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype._attachChart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(function () { return _this.chart; }), debounceTime(200))
            .subscribe(function () { return _this._attachChart(); });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initTagCloud();
        this.installResizeEvent();
        this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._attachChart();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.resize$.unsubscribe();
        if (this.chart) {
            this.ngZone.runOutsideAngular(function () { return _this.chart.destroy(); });
        }
    };
    G2TagCloudComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-tag-cloud',
                    template: "",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2TagCloudComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    G2TagCloudComponent.propDecorators = {
        delay: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "height", void 0);
    return G2TagCloudComponent;
}());
export { G2TagCloudComponent };
if (false) {
    /** @type {?} */
    G2TagCloudComponent.prototype.resize$;
    /** @type {?} */
    G2TagCloudComponent.prototype.chart;
    /** @type {?} */
    G2TagCloudComponent.prototype.delay;
    /** @type {?} */
    G2TagCloudComponent.prototype.height;
    /** @type {?} */
    G2TagCloudComponent.prototype.padding;
    /** @type {?} */
    G2TagCloudComponent.prototype.data;
    /** @type {?} */
    G2TagCloudComponent.prototype.el;
    /** @type {?} */
    G2TagCloudComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEdBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3RELG9DQUtDOzs7SUFKQywyQkFBVzs7SUFDWCwrQkFBZTs7SUFDZixrQ0FBZTs7O0FBSWpCO0lBbUJFLGFBQWE7SUFFYiw2QkFBb0IsRUFBYyxFQUFVLE1BQWM7UUFBdEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBUGxDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixTQUFJLEdBQXFCLEVBQUUsQ0FBQztJQUl3QixDQUFDOzs7O0lBRXRELDBDQUFZOzs7SUFBcEI7UUFDRSxxQkFBcUI7UUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtZQUN2QyxTQUFTOzs7OztzQkFBQyxHQUFHLEVBQUUsU0FBUzs7b0JBQ2hCLEtBQUssc0JBQ1QsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8s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a0M7O0lBQ2xDLHFDQUFxQzs7SUFDckMsc0NBQXFCOztJQUNyQixtQ0FBcUM7O0lBSXpCLGlDQUFzQjs7SUFBRSxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWREYXRhIHtcbiAgeD86IHN0cmluZztcbiAgdmFsdWU/OiBudW1iZXI7XG4gIGNhdGVnb3J5PzogYW55O1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXRhZy1jbG91ZCcsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAxMDA7XG4gIEBJbnB1dCgpIHBhZGRpbmcgPSAwO1xuICBASW5wdXQoKSBkYXRhOiBHMlRhZ0Nsb3VkRGF0YVtdID0gW107XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKSB7XG4gICAgLy8g57uZcG9pbnTms6jlhozkuIDkuKror43kupHnmoRzaGFwZVxuICAgIEcyLlNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgZHJhd1NoYXBlKGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICAgIGZpbGxPcGFjaXR5OiBjZmcub3BhY2l0eSxcbiAgICAgICAgICBmb250U2l6ZTogY2ZnLm9yaWdpbi5fb3JpZ2luLnNpemUsXG4gICAgICAgICAgcm90YXRlOiBjZmcub3JpZ2luLl9vcmlnaW4ucm90YXRlLFxuICAgICAgICAgIHRleHQ6IGNmZy5vcmlnaW4uX29yaWdpbi50ZXh0LFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgZm9udEZhbWlseTogY2ZnLm9yaWdpbi5fb3JpZ2luLmZvbnQsXG4gICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgIHRleHRCYXNlbGluZTogJ0FscGhhYmV0aWMnLFxuICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5hZGRTaGFwZSgndGV4dCcsIHtcbiAgICAgICAgICBhdHRyczogeyAuLi5hdHRycywgeDogY2ZnLngsIHk6IGNmZy55IH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBwYWRkaW5nLCBoZWlnaHQgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBoZWlnaHQsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNoYXJ0LmNvb3JkKCkucmVmbGVjdCgpO1xuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLmNvbG9yKCdjYXRlZ29yeScpXG4gICAgICAuc2hhcGUoJ2Nsb3VkJylcbiAgICAgIC50b29sdGlwKCd2YWx1ZSpjYXRlZ29yeScpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcbiAgICBjaGFydC5mb3JjZUZpdCgpO1xuXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5WaWV3KCkuc291cmNlKGRhdGEpO1xuICAgIGNvbnN0IHJhbmdlID0gZHYucmFuZ2UoJ3ZhbHVlJyk7XG4gICAgY29uc3QgbWluID0gcmFuZ2VbMF07XG4gICAgY29uc3QgbWF4ID0gcmFuZ2VbMV07XG5cbiAgICBkdi50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ3RhZy1jbG91ZCcsXG4gICAgICBmaWVsZHM6IFsneCcsICd2YWx1ZSddLFxuICAgICAgc2l6ZTogW2NoYXJ0LmdldCgnd2lkdGgnKSwgY2hhcnQuZ2V0KCdoZWlnaHQnKV0sXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXG4gICAgICByb3RhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbSA9IH5+KE1hdGgucmFuZG9tKCkgKiA0KSAlIDQ7XG4gICAgICAgIGlmIChyYW5kb20gPT09IDIpIHtcbiAgICAgICAgICByYW5kb20gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYW5kb20gKiA5MDsgLy8gMCwgOTAsIDI3MFxuICAgICAgfSxcbiAgICAgIGZvbnRTaXplOiBkID0+IChkLnZhbHVlID8gKChkLnZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqICg4MCAtIDI0KSArIDI0IDogMCksXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5yZXBhaW50KCk7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hDaGFydCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuY2hhcnQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRUYWdDbG91ZCgpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=