/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { updateHostClass, InputBoolean, InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
/**
 * @record
 */
export function G2PieData() { }
if (false) {
    /** @type {?} */
    G2PieData.prototype.x;
    /** @type {?} */
    G2PieData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2PieComponent = /** @class */ (function () {
    // #endregion
    function G2PieComponent(el, rend, ngZone, cdr) {
        this.el = el;
        this.rend = rend;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.legendData = [];
        // #region fields
        this.delay = 0;
        this.animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.hasLegend = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this.tooltip = true;
        this.lineWidth = 0;
        this.select = true;
        this.data = [];
    }
    /**
     * @private
     * @return {?}
     */
    G2PieComponent.prototype.setCls = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, rend = _a.rend, hasLegend = _a.hasLegend, isPercent = _a.isPercent;
        /** @type {?} */
        var ne = (/** @type {?} */ (el.nativeElement));
        updateHostClass(ne, rend, {
            'g2-pie': true,
            'g2-pie__legend-has': hasLegend,
            'g2-pie__legend-block': hasLegend && ne.clientWidth <= 380,
            'g2-pie__mini': isPercent,
        }, true);
    };
    /**
     * @private
     * @return {?}
     */
    G2PieComponent.prototype.fixData = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, percent = _a.percent, color = _a.color;
        this.isPercent = percent != null;
        if (this.isPercent) {
            this.select = false;
            this.tooltip = false;
            this.percentColor = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'); });
            this.data = [
                {
                    x: '占比',
                    y: percent,
                },
                {
                    x: '反比',
                    y: 100 - percent,
                },
            ];
        }
    };
    /**
     * @private
     * @return {?}
     */
    G2PieComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        this.setCls();
        var _a = this, node = _a.node, height = _a.height, padding = _a.padding, animate = _a.animate, tooltip = _a.tooltip, inner = _a.inner, hasLegend = _a.hasLegend;
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
            animate: animate,
        }));
        if (!tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
            });
        }
        chart.axis(false);
        chart.legend(false);
        chart.coord('theta', { innerRadius: inner });
        chart.filter('x', (/**
         * @param {?} val
         * @param {?} item
         * @return {?}
         */
        function (val, item) { return item.checked !== false; }));
        chart
            .intervalStack()
            .position('y')
            .tooltip('x*percent', (/**
         * @param {?} name
         * @param {?} p
         * @return {?}
         */
        function (name, p) { return ({
            name: name,
            // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
            value: hasLegend ? p : (p * 100).toFixed(2),
        }); }))
            .select(this.select);
        chart.render();
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2PieComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, animate = _a.animate, data = _a.data, lineWidth = _a.lineWidth, isPercent = _a.isPercent, percentColor = _a.percentColor, colors = _a.colors;
        if (!chart)
            return;
        chart.set('height', height);
        chart.set('padding', padding);
        chart.set('animate', animate);
        chart
            .get('geoms')[0]
            .style({ lineWidth: lineWidth, stroke: '#fff' })
            .color('x', isPercent ? percentColor : colors);
        /** @type {?} */
        var dv = new DataSet.DataView();
        dv.source(data).transform({
            type: 'percent',
            field: 'y',
            dimension: 'x',
            as: 'percent',
        });
        chart.source(dv, {
            x: {
                type: 'cat',
                range: [0, 1],
            },
        });
        chart.repaint();
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this.genLegend(); }));
    };
    /**
     * @private
     * @return {?}
     */
    G2PieComponent.prototype.genLegend = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, hasLegend = _a.hasLegend, isPercent = _a.isPercent, cdr = _a.cdr, chart = _a.chart;
        if (!hasLegend || isPercent)
            return;
        this.legendData = chart
            .get('geoms')[0]
            .get('dataArray')
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        }));
        cdr.detectChanges();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    G2PieComponent.prototype._click = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _a = this, legendData = _a.legendData, chart = _a.chart;
        legendData[i].checked = !legendData[i].checked;
        chart.repaint();
    };
    /**
     * @private
     * @return {?}
     */
    G2PieComponent.prototype.installResizeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$ || !this.hasLegend)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.setCls(); }));
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.install(); }), _this.delay); }));
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fixData();
        this.setCls();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
        this.installResizeEvent();
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-pie',
                    template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\"\n       class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\"\n        class=\"g2-pie__total-title\">\n      <ng-container *stringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\"\n         class=\"g2-pie__total-stat\">\n      <ng-container *stringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\"\n    class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\"\n      (click)=\"_click(index)\"\n      class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\"\n          [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\"\n          [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2PieComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    G2PieComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container',] }],
        delay: [{ type: Input }],
        animate: [{ type: Input }],
        color: [{ type: Input }],
        subTitle: [{ type: Input }],
        total: [{ type: Input }],
        height: [{ type: Input }],
        hasLegend: [{ type: Input }],
        inner: [{ type: Input }],
        padding: [{ type: Input }],
        percent: [{ type: Input }],
        tooltip: [{ type: Input }],
        lineWidth: [{ type: Input }],
        select: [{ type: Input }],
        valueFormat: [{ type: Input }],
        data: [{ type: Input }],
        colors: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2PieComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2PieComponent.prototype, "animate", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2PieComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2PieComponent.prototype, "hasLegend", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], G2PieComponent.prototype, "percent", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2PieComponent.prototype, "tooltip", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2PieComponent.prototype, "lineWidth", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2PieComponent.prototype, "select", void 0);
    return G2PieComponent;
}());
export { G2PieComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.isPercent;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.percentColor;
    /** @type {?} */
    G2PieComponent.prototype.legendData;
    /** @type {?} */
    G2PieComponent.prototype.delay;
    /** @type {?} */
    G2PieComponent.prototype.animate;
    /** @type {?} */
    G2PieComponent.prototype.color;
    /** @type {?} */
    G2PieComponent.prototype.subTitle;
    /** @type {?} */
    G2PieComponent.prototype.total;
    /** @type {?} */
    G2PieComponent.prototype.height;
    /** @type {?} */
    G2PieComponent.prototype.hasLegend;
    /** @type {?} */
    G2PieComponent.prototype.inner;
    /** @type {?} */
    G2PieComponent.prototype.padding;
    /** @type {?} */
    G2PieComponent.prototype.percent;
    /** @type {?} */
    G2PieComponent.prototype.tooltip;
    /** @type {?} */
    G2PieComponent.prototype.lineWidth;
    /** @type {?} */
    G2PieComponent.prototype.select;
    /** @type {?} */
    G2PieComponent.prototype.valueFormat;
    /** @type {?} */
    G2PieComponent.prototype.data;
    /** @type {?} */
    G2PieComponent.prototype.colors;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.rend;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs5QywrQkFJQzs7O0lBSEMsc0JBQU87O0lBQ1Asc0JBQVU7OztBQUlaO0lBZ0NFLGFBQWE7SUFFYix3QkFDVSxFQUFjLEVBQ2QsSUFBZSxFQUNmLE1BQWMsRUFDZCxHQUFzQjtRQUh0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVztRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTNCaEMsZUFBVSxHQUFVLEVBQUUsQ0FBQzs7UUFJQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFHcEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5CLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMs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QUFtQjs7Ozs7SUFDbkIsbUNBQTJCOzs7OztJQUMzQixzQ0FBMEI7O0lBQzFCLG9DQUF1Qjs7SUFJdkIsK0JBQWtDOztJQUNsQyxpQ0FBd0M7O0lBQ3hDLCtCQUE0Qzs7SUFDNUMsa0NBQThDOztJQUM5QywrQkFBMkM7O0lBQzNDLGdDQUFtQzs7SUFDbkMsbUNBQTJDOztJQUMzQywrQkFBc0I7O0lBQ3RCLGlDQUE0Qzs7SUFDNUMsaUNBQXdDOztJQUN4QyxpQ0FBd0M7O0lBQ3hDLG1DQUFzQzs7SUFDdEMsZ0NBQXVDOztJQUN2QyxxQ0FBNEM7O0lBQzVDLDhCQUFnQzs7SUFDaEMsZ0NBQXVCOzs7OztJQUtyQiw0QkFBc0I7Ozs7O0lBQ3RCLDhCQUF1Qjs7Ozs7SUFDdkIsZ0NBQXNCOzs7OztJQUN0Qiw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcywgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJQaWVEYXRhIHtcbiAgeDogYW55O1xuICB5OiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcGllJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMlBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaXNQZXJjZW50OiBib29sZWFuO1xuICBwcml2YXRlIHBlcmNlbnRDb2xvcjogYW55O1xuICBsZWdlbmREYXRhOiBhbnlbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlubmVyID0gMC43NTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbMTIsIDAsIDEyLCAwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxpbmVXaWR0aCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdDogKHk6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBHMlBpZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZDogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBzZXRDbHMoKSB7XG4gICAgY29uc3QgeyBlbCwgcmVuZCwgaGFzTGVnZW5kLCBpc1BlcmNlbnQgfSA9IHRoaXM7XG4gICAgY29uc3QgbmUgPSBlbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhcbiAgICAgIG5lLFxuICAgICAgcmVuZCxcbiAgICAgIHtcbiAgICAgICAgJ2cyLXBpZSc6IHRydWUsXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1oYXMnOiBoYXNMZWdlbmQsXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1ibG9jayc6IGhhc0xlZ2VuZCAmJiBuZS5jbGllbnRXaWR0aCA8PSAzODAsXG4gICAgICAgICdnMi1waWVfX21pbmknOiBpc1BlcmNlbnQsXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhEYXRhKCkge1xuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IgfSA9IHRoaXM7XG4gICAgdGhpcy5pc1BlcmNlbnQgPSBwZXJjZW50ICE9IG51bGw7XG4gICAgaWYgKHRoaXMuaXNQZXJjZW50KSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy50b29sdGlwID0gZmFsc2U7XG4gICAgICB0aGlzLnBlcmNlbnRDb2xvciA9IHZhbHVlID0+ICh2YWx1ZSA9PT0gJ+WNoOavlCcgPyBjb2xvciB8fCAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJyA6ICcjRjBGMkY1Jyk7XG4gICAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y2g5q+UJyxcbiAgICAgICAgICB5OiBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WPjeavlCcsXG4gICAgICAgICAgeTogMTAwIC0gcGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMuc2V0Q2xzKCk7XG5cbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgYW5pbWF0ZSwgdG9vbHRpcCwgaW5uZXIsIGhhc0xlZ2VuZCB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgYW5pbWF0ZSxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgaXRlbVRwbDogJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6e2NvbG9yfTtcIiBjbGFzcz1cImcyLXRvb2x0aXAtbWFya2VyXCI+PC9zcGFuPntuYW1lfToge3ZhbHVlfSAlPC9saT4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcblxuICAgIGNoYXJ0LmNvb3JkKCd0aGV0YScsIHsgaW5uZXJSYWRpdXM6IGlubmVyIH0pO1xuXG4gICAgY2hhcnQuZmlsdGVyKCd4JywgKHZhbDogYW55LCBpdGVtOiBhbnkpID0+IGl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbFN0YWNrKClcbiAgICAgIC5wb3NpdGlvbigneScpXG4gICAgICAudG9vbHRpcCgneCpwZXJjZW50JywgKG5hbWUsIHApID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC8vIOeUseS6jiBoYXNMZWdlbmQg5Lya5LyY5YWI5aSE55CG5Li655m+5YiG5q+U5qC85byP77yM5Zug5q2k5peg6ZyA6KaB5ZyoIHRvb2x0aXAg5Lit6YeN5paw6L2s5o2iXG4gICAgICAgIHZhbHVlOiBoYXNMZWdlbmQgPyBwIDogKHAgKiAxMDApLnRvRml4ZWQoMiksXG4gICAgICB9KSlcbiAgICAgIC5zZWxlY3QodGhpcy5zZWxlY3QpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgYW5pbWF0ZSwgZGF0YSwgbGluZVdpZHRoLCBpc1BlcmNlbnQsIHBlcmNlbnRDb2xvciwgY29sb3JzIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybjtcblxuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcbiAgICBjaGFydC5zZXQoJ2FuaW1hdGUnLCBhbmltYXRlKTtcblxuICAgIGNoYXJ0XG4gICAgICAuZ2V0KCdnZW9tcycpWzBdXG4gICAgICAuc3R5bGUoeyBsaW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pXG4gICAgICAuY29sb3IoJ3gnLCBpc1BlcmNlbnQgPyBwZXJjZW50Q29sb3IgOiBjb2xvcnMpO1xuXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5EYXRhVmlldygpO1xuICAgIGR2LnNvdXJjZShkYXRhKS50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ3BlcmNlbnQnLFxuICAgICAgZmllbGQ6ICd5JyxcbiAgICAgIGRpbWVuc2lvbjogJ3gnLFxuICAgICAgYXM6ICdwZXJjZW50JyxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcblxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmdlbkxlZ2VuZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGVnZW5kKCkge1xuICAgIGNvbnN0IHsgaGFzTGVnZW5kLCBpc1BlcmNlbnQsIGNkciwgY2hhcnQgfSA9IHRoaXM7XG4gICAgaWYgKCFoYXNMZWdlbmQgfHwgaXNQZXJjZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmxlZ2VuZERhdGEgPSBjaGFydFxuICAgICAgLmdldCgnZ2VvbXMnKVswXVxuICAgICAgLmdldCgnZGF0YUFycmF5JylcbiAgICAgIC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICAgIG9yaWdpbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgb3JpZ2luLnBlcmNlbnQgPSAob3JpZ2luLnBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBsZWdlbmREYXRhLCBjaGFydCB9ID0gdGhpcztcbiAgICBsZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhbGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQgfHwgIXRoaXMuaGFzTGVnZW5kKSByZXR1cm47XG5cbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENscygpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVzaXplJCkge1xuICAgICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=