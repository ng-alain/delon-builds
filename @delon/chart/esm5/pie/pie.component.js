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
            function (value) {
                return value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs5QywrQkFJQzs7O0lBSEMsc0JBQU87O0lBQ1Asc0JBQVU7OztBQUlaO0lBZ0NFLGFBQWE7SUFFYix3QkFDVSxFQUFjLEVBQ2QsSUFBZSxFQUNmLE1BQWMsRUFDZCxHQUFzQjtRQUh0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVztRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTNCaEMsZUFBVSxHQUFVLEVBQUUsQ0FBQzs7UUFJQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFHcEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5CLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMs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Q25CLG1DQUEyQjs7Ozs7SUFDM0Isc0NBQTBCOztJQUMxQixvQ0FBdUI7O0lBSXZCLCtCQUFrQzs7SUFDbEMsaUNBQXdDOztJQUN4QywrQkFBNEM7O0lBQzVDLGtDQUE4Qzs7SUFDOUMsK0JBQTJDOztJQUMzQyxnQ0FBbUM7O0lBQ25DLG1DQUEyQzs7SUFDM0MsK0JBQXNCOztJQUN0QixpQ0FBNEM7O0lBQzVDLGlDQUF3Qzs7SUFDeEMsaUNBQXdDOztJQUN4QyxtQ0FBc0M7O0lBQ3RDLGdDQUF1Qzs7SUFDdkMscUNBQTRDOztJQUM1Qyw4QkFBZ0M7O0lBQ2hDLGdDQUF1Qjs7Ozs7SUFLckIsNEJBQXNCOzs7OztJQUN0Qiw4QkFBdUI7Ozs7O0lBQ3ZCLGdDQUFzQjs7Ozs7SUFDdEIsNkJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb247XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBwcml2YXRlIGlzUGVyY2VudDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwZXJjZW50Q29sb3I6IGFueTtcbiAgbGVnZW5kRGF0YTogYW55W10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbm5lciA9IDAuNzU7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzEyLCAwLCAxMiwgMF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsaW5lV2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXQ6ICh5OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogRzJQaWVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmQ6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIHByaXZhdGUgc2V0Q2xzKCkge1xuICAgIGNvbnN0IHsgZWwsIHJlbmQsIGhhc0xlZ2VuZCwgaXNQZXJjZW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IG5lID0gZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXG4gICAgICBuZSxcbiAgICAgIHJlbmQsXG4gICAgICB7XG4gICAgICAgICdnMi1waWUnOiB0cnVlLFxuICAgICAgICAnZzItcGllX19sZWdlbmQtaGFzJzogaGFzTGVnZW5kLFxuICAgICAgICAnZzItcGllX19sZWdlbmQtYmxvY2snOiBoYXNMZWdlbmQgJiYgbmUuY2xpZW50V2lkdGggPD0gMzgwLFxuICAgICAgICAnZzItcGllX19taW5pJzogaXNQZXJjZW50LFxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4RGF0YSgpIHtcbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yIH0gPSB0aGlzO1xuICAgIHRoaXMuaXNQZXJjZW50ID0gcGVyY2VudCAhPSBudWxsO1xuICAgIGlmICh0aGlzLmlzUGVyY2VudCkge1xuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuICAgICAgdGhpcy5wZXJjZW50Q29sb3IgPSB2YWx1ZSA9PlxuICAgICAgICB2YWx1ZSA9PT0gJ+WNoOavlCcgPyBjb2xvciB8fCAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJyA6ICcjRjBGMkY1JztcbiAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfljaDmr5QnLFxuICAgICAgICAgIHk6IHBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y+N5q+UJyxcbiAgICAgICAgICB5OiAxMDAgLSBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgdGhpcy5zZXRDbHMoKTtcblxuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBwYWRkaW5nLCBhbmltYXRlLCB0b29sdGlwLCBpbm5lciwgaGFzTGVnZW5kIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBhbmltYXRlLFxuICAgIH0pKTtcblxuICAgIGlmICghdG9vbHRpcCkge1xuICAgICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgICBpdGVtVHBsOlxuICAgICAgICAgICc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOntjb2xvcn07XCIgY2xhc3M9XCJnMi10b29sdGlwLW1hcmtlclwiPjwvc3Bhbj57bmFtZX06IHt2YWx1ZX0gJTwvbGk+JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG5cbiAgICBjaGFydC5jb29yZCgndGhldGEnLCB7IGlubmVyUmFkaXVzOiBpbm5lciB9KTtcblxuICAgIGNoYXJ0LmZpbHRlcigneCcsICh2YWw6IGFueSwgaXRlbTogYW55KSA9PiBpdGVtLmNoZWNrZWQgIT09IGZhbHNlKTtcblxuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWxTdGFjaygpXG4gICAgICAucG9zaXRpb24oJ3knKVxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChuYW1lLCBwKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICAvLyDnlLHkuo4gaGFzTGVnZW5kIOS8muS8mOWFiOWkhOeQhuS4uueZvuWIhuavlOagvOW8j++8jOWboOatpOaXoOmcgOimgeWcqCB0b29sdGlwIOS4remHjeaWsOi9rOaNolxuICAgICAgICB2YWx1ZTogaGFzTGVnZW5kID8gcCA6IChwICogMTAwKS50b0ZpeGVkKDIpLFxuICAgICAgfSkpXG4gICAgICAuc2VsZWN0KHRoaXMuc2VsZWN0KTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGFydCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBhbmltYXRlLFxuICAgICAgZGF0YSxcbiAgICAgIGxpbmVXaWR0aCxcbiAgICAgIGlzUGVyY2VudCxcbiAgICAgIHBlcmNlbnRDb2xvcixcbiAgICAgIGNvbG9ycyxcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0KSByZXR1cm47XG5cbiAgICBjaGFydC5zZXQoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgY2hhcnQuc2V0KCdwYWRkaW5nJywgcGFkZGluZyk7XG4gICAgY2hhcnQuc2V0KCdhbmltYXRlJywgYW5pbWF0ZSk7XG5cbiAgICBjaGFydFxuICAgICAgLmdldCgnZ2VvbXMnKVswXVxuICAgICAgLnN0eWxlKHsgbGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KVxuICAgICAgLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gcGVyY2VudENvbG9yIDogY29sb3JzKTtcblxuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFTZXQuRGF0YVZpZXcoKTtcbiAgICBkdi5zb3VyY2UoZGF0YSkudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICdwZXJjZW50JyxcbiAgICAgIGZpZWxkOiAneScsXG4gICAgICBkaW1lbnNpb246ICd4JyxcbiAgICAgIGFzOiAncGVyY2VudCcsXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5yZXBhaW50KCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgaXNQZXJjZW50LCBjZHIsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGlmICghaGFzTGVnZW5kIHx8IGlzUGVyY2VudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcbiAgICAgIC5nZXQoJ2dlb21zJylbMF1cbiAgICAgIC5nZXQoJ2RhdGFBcnJheScpXG4gICAgICAubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgICBvcmlnaW4uY29sb3IgPSBpdGVtWzBdLmNvbG9yO1xuICAgICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIG9yaWdpbi5wZXJjZW50ID0gKG9yaWdpbi5wZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcikge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgY2hhcnQgfSA9IHRoaXM7XG4gICAgbGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIWxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcbiAgICBjaGFydC5yZXBhaW50KCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5yZXNpemUkIHx8ICF0aGlzLmhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDbHMoKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpeERhdGEoKTtcbiAgICB0aGlzLnNldENscygpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19