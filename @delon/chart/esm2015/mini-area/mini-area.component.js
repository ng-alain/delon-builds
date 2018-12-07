/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, } from '@angular/core';
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
     */
    constructor(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
    }
    /**
     * @return {?}
     */
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line } = this;
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: fit,
            height,
            padding,
        });
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
        chart.tooltip({
            'type': tooltipType === 'mini' ? 'mini' : null,
            'showTitle': false,
            'hideMarkders': false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: `0px 4px` },
        });
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
            .shape('smooth')
            .opacity(1);
        if (line) {
            chart.line().position('x*y').shape('smooth').opacity(1).tooltip(false);
        }
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!chart)
            return;
        /** @type {?} */
        const geoms = chart.get('geoms');
        geoms.forEach(g => g.color(color));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        chart.set('forceFit', fit);
        chart.set('height', height);
        chart.set('animate', animate);
        chart.set('padding', padding);
        chart.changeData(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout(() => this.install(), this.delay);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.attachChart();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { chart, view, viewLine } = this;
        if (!chart)
            return;
        view.destroy();
        if (viewLine) {
            viewLine.destroy();
        }
        chart.destroy();
    }
}
G2MiniAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-area',
                template: ``,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2MiniAreaComponent.ctorParameters = () => [
    { type: ElementRef }
];
G2MiniAreaComponent.propDecorators = {
    delay: [{ type: Input }],
    color: [{ type: Input }],
    borderColor: [{ type: Input }],
    borderWidth: [{ type: Input }],
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    fit: [{ type: Input }],
    line: [{ type: Input }],
    animate: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    tooltipType: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "delay", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "height", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "fit", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "line", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "animate", void 0);
if (false) {
    /** @type {?} */
    G2MiniAreaComponent.prototype.chart;
    /** @type {?} */
    G2MiniAreaComponent.prototype.view;
    /** @type {?} */
    G2MiniAreaComponent.prototype.viewLine;
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
    G2MiniAreaComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBSXhELG9DQUlDOzs7SUFIQywyQkFBTzs7SUFDUCwyQkFBTzs7O0FBU1QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUF3QjlCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOztRQWpCVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUNULGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWYsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBRy9CLFlBQU8sR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQXVCLFNBQVMsQ0FBQztJQUlmLENBQUM7Ozs7SUFFL0IsT0FBTztjQUNQLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJOztjQUNwRixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FB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QUU7O29EQUFnQjs7O0lBYnhDLG9DQUFtQjs7SUFDbkIsbUNBQWtCOztJQUNsQix1Q0FBc0I7O0lBSXRCLG9DQUFrQzs7SUFDbEMsb0NBQTJDOztJQUMzQywwQ0FBaUM7O0lBQ2pDLDBDQUF3Qzs7SUFDeEMscUNBQStEOztJQUMvRCxrQ0FBb0M7O0lBQ3BDLG1DQUFzQzs7SUFDdEMsc0NBQXdDOztJQUN4QyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsc0NBQTBDOztJQUMxQyxtQ0FBcUM7O0lBQ3JDLDZDQUE2Qjs7SUFDN0IsMENBQXFEOztJQUl6QyxpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUFyZWFEYXRhIHtcbiAgeDogYW55O1xuICB5OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1hcmVhJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgdmlldzogYW55O1xuICBwcml2YXRlIHZpZXdMaW5lOiBhbnk7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjIpJztcbiAgQElucHV0KCkgYm9yZGVyQ29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJvcmRlcldpZHRoID0gMjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKSBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHhBeGlzOiBhbnk7XG4gIEBJbnB1dCgpIHlBeGlzOiBhbnk7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzgsIDgsIDgsIDhdO1xuICBASW5wdXQoKSBkYXRhOiBHMk1pbmlBcmVhRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIHlUb29sdGlwU3VmZml4ID0gJyc7XG4gIEBJbnB1dCgpIHRvb2x0aXBUeXBlOiAnbWluaScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBmaXQsIGhlaWdodCwgcGFkZGluZywgeEF4aXMsIHlBeGlzLCB5VG9vbHRpcFN1ZmZpeCwgdG9vbHRpcFR5cGUsIGxpbmUgfSA9IHRoaXM7XG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiBmaXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pO1xuXG4gICAgaWYgKCF4QXhpcyAmJiAheUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh4QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneCcsIHhBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCB5QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICd0eXBlJzogdG9vbHRpcFR5cGUgPT09ICdtaW5pJyA/ICdtaW5pJyA6IG51bGwsXG4gICAgICAnc2hvd1RpdGxlJzogZmFsc2UsXG4gICAgICAnaGlkZU1hcmtkZXJzJzogZmFsc2UsXG4gICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogNCB9LFxuICAgICAgJ2cyLXRvb2x0aXAtbGlzdC1pdGVtJzogeyBtYXJnaW46IGAwcHggNHB4YCB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5hcmVhKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeCwgeSkgPT4gKHsgbmFtZTogeCwgdmFsdWU6IHkgKyB5VG9vbHRpcFN1ZmZpeCB9KSlcbiAgICAgIC5zaGFwZSgnc21vb3RoJylcbiAgICAgIC5vcGFjaXR5KDEpO1xuXG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5Jykuc2hhcGUoJ3Ntb290aCcpLm9wYWNpdHkoMSkudG9vbHRpcChmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGxpbmUsIGZpdCwgaGVpZ2h0LCBhbmltYXRlLCBwYWRkaW5nLCBkYXRhLCBjb2xvciwgYm9yZGVyQ29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybjtcblxuICAgIGNvbnN0IGdlb21zID0gY2hhcnQuZ2V0KCdnZW9tcycpO1xuICAgIGdlb21zLmZvckVhY2goZyA9PiBnLmNvbG9yKGNvbG9yKSk7XG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGdlb21zWzFdLmNvbG9yKGJvcmRlckNvbG9yKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9XG5cbiAgICBjaGFydC5zZXQoJ2ZvcmNlRml0JywgZml0KTtcbiAgICBjaGFydC5zZXQoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgY2hhcnQuc2V0KCdhbmltYXRlJywgYW5pbWF0ZSk7XG4gICAgY2hhcnQuc2V0KCdwYWRkaW5nJywgcGFkZGluZyk7XG5cbiAgICBjaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNoYXJ0LCB2aWV3LCB2aWV3TGluZSB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0KSByZXR1cm47XG5cbiAgICB2aWV3LmRlc3Ryb3koKTtcbiAgICBpZiAodmlld0xpbmUpIHtcbiAgICAgIHZpZXdMaW5lLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgY2hhcnQuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=