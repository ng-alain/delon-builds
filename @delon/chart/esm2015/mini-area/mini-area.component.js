/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2MiniAreaData() { }
if (false) {
    /** @type {?} */
    G2MiniAreaData.prototype.x;
    /** @type {?} */
    G2MiniAreaData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
export class G2MiniAreaComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} configSrv
     */
    constructor(el, ngZone, configSrv) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.height = 56;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme } = this;
        /** @type {?} */
        const chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: fit,
            height,
            padding,
            theme,
        }));
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        /** @type {?} */
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            (/** @type {?} */ (tooltipOption.domStyles))['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = `<li>{value}</li>`;
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y + yTooltipSuffix })))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').tooltip(false);
        }
        chart.render();
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!chart || !data || data.length <= 0) {
            return;
        }
        /** @type {?} */
        const geoms = chart.geometries;
        geoms.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color(color)));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        chart.autoFit = fit;
        chart.height = height;
        chart.animate(animate);
        chart.padding = padding;
        chart.changeData(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.chart.destroy()));
        }
    }
}
G2MiniAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-area',
                exportAs: 'g2MiniArea',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2MiniAreaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: AlainConfigService }
];
G2MiniAreaComponent.propDecorators = {
    delay: [{ type: Input }],
    color: [{ type: Input }],
    borderColor: [{ type: Input }],
    borderWidth: [{ type: Input }],
    height: [{ type: Input }],
    fit: [{ type: Input }],
    line: [{ type: Input }],
    animate: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    tooltipType: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "fit", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "line", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "animate", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.chart;
    /** @type {?} */
    G2MiniAreaComponent.prototype.delay;
    /** @type {?} */
    G2MiniAreaComponent.prototype.color;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderColor;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.prototype.height;
    /** @type {?} */
    G2MiniAreaComponent.prototype.fit;
    /** @type {?} */
    G2MiniAreaComponent.prototype.line;
    /** @type {?} */
    G2MiniAreaComponent.prototype.animate;
    /** @type {?} */
    G2MiniAreaComponent.prototype.xAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.padding;
    /** @type {?} */
    G2MiniAreaComponent.prototype.data;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yTooltipSuffix;
    /** @type {?} */
    G2MiniAreaComponent.prototype.tooltipType;
    /** @type {?} */
    G2MiniAreaComponent.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUV4RCxvQ0FJQzs7O0lBSEMsMkJBQU87O0lBQ1AsMkJBQU87OztBQWVULE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUF1QjlCLFlBQW9CLEVBQWMsRUFBVSxNQUFjLEVBQUUsU0FBNkI7UUFBckUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBbEJsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUNULGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWCxRQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFHL0IsWUFBTyxHQUErQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVCLFNBQVMs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QiwwQ0FBcUQ7O0lBQ3JELG9DQUFxQzs7Ozs7SUFJekIsaUNBQXNCOzs7OztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgTG9vc2VPYmplY3QsIFRvb2x0aXBPcHRpb24gfSBmcm9tICdAYW50di9nMi9saWIvaW50ZXJmYWNlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUFyZWFEYXRhIHtcbiAgeDogYW55O1xuICB5OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1hcmVhJyxcbiAgZXhwb3J0QXM6ICdnMk1pbmlBcmVhJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuMiknO1xuICBASW5wdXQoKSBib3JkZXJDb2xvciA9ICcjMTg5MEZGJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSA1NjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpdCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgeEF4aXM6IGFueTtcbiAgQElucHV0KCkgeUF4aXM6IGFueTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbOCwgOCwgOCwgOF07XG4gIEBJbnB1dCgpIGRhdGE6IEcyTWluaUFyZWFEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgeVRvb2x0aXBTdWZmaXggPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcFR5cGU6ICdtaW5pJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IExvb3NlT2JqZWN0O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBlbCwgZml0LCBoZWlnaHQsIHBhZGRpbmcsIHhBeGlzLCB5QXhpcywgeVRvb2x0aXBTdWZmaXgsIHRvb2x0aXBUeXBlLCBsaW5lLCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IGZpdCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXhBeGlzICYmICF5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHhBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgeEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneScsIHlBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneScsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNvbnN0IHRvb2x0aXBPcHRpb246IFRvb2x0aXBPcHRpb24gPSB7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgc2hvd01hcmtlcnM6IHRydWUsXG4gICAgICBlbnRlcmFibGU6IHRydWUsXG4gICAgICBkb21TdHlsZXM6IHtcbiAgICAgICAgJ2cyLXRvb2x0aXAnOiB7IHBhZGRpbmc6ICcwcHgnIH0sXG4gICAgICAgICdnMi10b29sdGlwLXRpdGxlJzogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgJ2cyLXRvb2x0aXAtbGlzdC1pdGVtJzogeyBtYXJnaW46ICc0cHgnIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHRvb2x0aXBUeXBlID09PSAnbWluaScpIHtcbiAgICAgIHRvb2x0aXBPcHRpb24ucG9zaXRpb24gPSAndG9wJztcbiAgICAgIHRvb2x0aXBPcHRpb24uZG9tU3R5bGVzIVsnZzItdG9vbHRpcCddID0geyBwYWRkaW5nOiAnMHB4JywgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLCBib3hTaGFkb3c6ICdub25lJyB9O1xuICAgICAgdG9vbHRpcE9wdGlvbi5pdGVtVHBsID0gYDxsaT57dmFsdWV9PC9saT5gO1xuICAgICAgdG9vbHRpcE9wdGlvbi5vZmZzZXQgPSAwO1xuICAgIH1cbiAgICBjaGFydC50b29sdGlwKHRvb2x0aXBPcHRpb24pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5hcmVhKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeCwgeSkgPT4gKHsgbmFtZTogeCwgdmFsdWU6IHkgKyB5VG9vbHRpcFN1ZmZpeCB9KSlcbiAgICAgIC5zaGFwZSgnc21vb3RoJyk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd4KnknKS5zaGFwZSgnc21vb3RoJykudG9vbHRpcChmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGxpbmUsIGZpdCwgaGVpZ2h0LCBhbmltYXRlLCBwYWRkaW5nLCBkYXRhLCBjb2xvciwgYm9yZGVyQ29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdlb21zID0gY2hhcnQuZ2VvbWV0cmllcztcbiAgICBnZW9tcy5mb3JFYWNoKGcgPT4gZy5jb2xvcihjb2xvcikpO1xuICAgIGlmIChsaW5lKSB7XG4gICAgICBnZW9tc1sxXS5jb2xvcihib3JkZXJDb2xvcikuc2l6ZShib3JkZXJXaWR0aCk7XG4gICAgfVxuXG4gICAgY2hhcnQuYXV0b0ZpdCA9IGZpdDtcbiAgICBjaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2hhcnQuYW5pbWF0ZShhbmltYXRlKTtcbiAgICBjaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==