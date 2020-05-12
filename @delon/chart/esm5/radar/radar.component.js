/**
 * @fileoverview added by tsickle
 * Generated from: radar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2RadarData() { }
if (false) {
    /** @type {?} */
    G2RadarData.prototype.name;
    /** @type {?} */
    G2RadarData.prototype.label;
    /** @type {?} */
    G2RadarData.prototype.value;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2RadarComponent = /** @class */ (function () {
    // #endregion
    function G2RadarComponent(cdr, ngZone) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.legendData = [];
        // #region fields
        this.delay = 0;
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
    }
    /**
     * @private
     * @return {?}
     */
    G2RadarComponent.prototype.getHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.height - (this.hasLegend ? 80 : 22);
    };
    /**
     * @private
     * @return {?}
     */
    G2RadarComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, node = _a.node, padding = _a.padding;
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: this.getHeight(),
            padding: padding,
        }));
        chart.coord('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            labelOffset: 8,
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
            grid: {
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0],
                },
            },
        });
        chart.axis('value', {
            grid: {
                type: 'polygon',
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0],
                },
            },
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
        });
        chart.filter('name', (/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var legendItem = _this.legendData.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.name === name; }));
            return legendItem ? legendItem.checked !== false : true;
        }));
        chart.line().position('label*value');
        chart
            .point()
            .position('label*value')
            .shape('circle')
            .size(3);
        chart.render();
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2RadarComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data, colors = _a.colors, tickCount = _a.tickCount;
        if (!chart || !data || data.length <= 0)
            return;
        chart.set('height', this.getHeight());
        chart.set('padding', padding);
        chart.source(data, {
            value: {
                min: 0,
                tickCount: tickCount,
            },
        });
        chart.get('geoms').forEach((/**
         * @param {?} g
         * @return {?}
         */
        function (g) {
            g.color('name', colors);
        }));
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
    G2RadarComponent.prototype.genLegend = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, hasLegend = _a.hasLegend, cdr = _a.cdr, chart = _a.chart;
        if (!hasLegend)
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
            /** @type {?} */
            var result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((/**
                 * @param {?} p
                 * @param {?} n
                 * @return {?}
                 */
                function (p, n) { return p + n._origin.value; }), 0),
            };
            return result;
        }));
        cdr.detectChanges();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    G2RadarComponent.prototype._click = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _a = this, legendData = _a.legendData, chart = _a.chart;
        legendData[i].checked = !legendData[i].checked;
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnInit = /**
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
    G2RadarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.legendData.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = true); }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2RadarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-radar',
                    exportAs: 'g2Radar',
                    template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n<div nz-row\n     class=\"g2-radar__legend\"\n     *ngIf=\"hasLegend\">\n  <div nz-col\n       [nzSpan]=\"24 / legendData.length\"\n       *ngFor=\"let i of legendData; let idx = index\"\n       (click)=\"_click(idx)\"\n       class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\"\n       [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                    host: {
                        '[style.height.px]': 'height',
                        '[class.g2-radar]': 'true',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2RadarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2RadarComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container', { static: true },] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        hasLegend: [{ type: Input }],
        tickCount: [{ type: Input }],
        data: [{ type: Input }],
        colors: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2RadarComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2RadarComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2RadarComponent.prototype, "hasLegend", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2RadarComponent.prototype, "tickCount", void 0);
    return G2RadarComponent;
}());
export { G2RadarComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.chart;
    /** @type {?} */
    G2RadarComponent.prototype.legendData;
    /** @type {?} */
    G2RadarComponent.prototype.delay;
    /** @type {?} */
    G2RadarComponent.prototype.title;
    /** @type {?} */
    G2RadarComponent.prototype.height;
    /** @type {?} */
    G2RadarComponent.prototype.padding;
    /** @type {?} */
    G2RadarComponent.prototype.hasLegend;
    /** @type {?} */
    G2RadarComponent.prototype.tickCount;
    /** @type {?} */
    G2RadarComponent.prototype.data;
    /** @type {?} */
    G2RadarComponent.prototype.colors;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFLTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBSXhELGlDQUtDOzs7SUFKQywyQkFBYTs7SUFDYiw0QkFBYzs7SUFDZCw0QkFBYzs7O0FBSWhCO0lBNEJFLGFBQWE7SUFFYiwwQkFBb0IsR0FBc0IsRUFBVSxNQUFjO1FBQTlDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWZsRSxlQUFVLEdBQVUsRUFBRSxDQUFDOztRQUlDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUM3QixTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFJdEMsQ0FBQzs7Ozs7SUFFOUQsb0NBQVM7Ozs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENB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bWxCQUFxQztvQkFDckMsSUFBSSxFQUFFO3dCQUNKLG1CQUFtQixFQUFFLFFBQVE7d0JBQzdCLGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBbENDLGlCQUFpQjtnQkFJakIsTUFBTTs7O3VCQWdDTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFNdkMsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOztJQVBrQjtRQUFkLFdBQVcsRUFBRTs7bURBQVc7SUFFVjtRQUFkLFdBQVcsRUFBRTs7b0RBQVk7SUFFVjtRQUFmLFlBQVksRUFBRTs7dURBQWtCO0lBQ2xCO1FBQWQsV0FBVyxFQUFFOzt1REFBZTtJQTBJeEMsdUJBQUM7Q0FBQSxBQWxLRCxJQWtLQztTQXRKWSxnQkFBZ0I7Ozs7OztJQUMzQixnQ0FBbUU7Ozs7O0lBQ25FLGlDQUFtQjs7SUFDbkIsc0NBQXVCOztJQUl2QixpQ0FBa0M7O0lBQ2xDLGlDQUEyQzs7SUFDM0Msa0NBQW1DOztJQUNuQyxtQ0FBOEM7O0lBQzlDLHFDQUEwQzs7SUFDMUMscUNBQXNDOztJQUN0QyxnQ0FBa0M7O0lBQ2xDLGtDQUEyRzs7Ozs7SUFJL0YsK0JBQThCOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyUmFkYXJEYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXJhZGFyJyxcbiAgZXhwb3J0QXM6ICdnMlJhZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICAgICdbY2xhc3MuZzItcmFkYXJdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyUmFkYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNDQsIDMwLCAxNiwgMzBdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdGlja0NvdW50ID0gNDtcbiAgQElucHV0KCkgZGF0YTogRzJSYWRhckRhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBjb2xvcnMgPSBbJyMxODkwRkYnLCAnI0ZBQ0MxNCcsICcjMkZDMjVCJywgJyM4NTQzRTAnLCAnI0YwNDg2NCcsICcjMTNDMkMyJywgJyNmYThjMTYnLCAnI2EwZDkxMSddO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC0gKHRoaXMuaGFzTGVnZW5kID8gODAgOiAyMik7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBwYWRkaW5nIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgcGFkZGluZyxcbiAgICB9KSk7XG5cbiAgICBjaGFydC5jb29yZCgncG9sYXInKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoJ2xhYmVsJywge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsT2Zmc2V0OiA4LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xuICAgICAgZ3JpZDoge1xuICAgICAgICB0eXBlOiAncG9seWdvbicsXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZTllOWU5JyxcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAuNjUpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuZmlsdGVyKCduYW1lJywgKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGVnZW5kSXRlbSA9IHRoaXMubGVnZW5kRGF0YS5maW5kKHcgPT4gdy5uYW1lID09PSBuYW1lKTtcbiAgICAgIHJldHVybiBsZWdlbmRJdGVtID8gbGVnZW5kSXRlbS5jaGVja2VkICE9PSBmYWxzZSA6IHRydWU7XG4gICAgfSk7XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ2xhYmVsKnZhbHVlJyk7XG5cbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKVxuICAgICAgLnNoYXBlKCdjaXJjbGUnKVxuICAgICAgLnNpemUoMyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgcGFkZGluZywgZGF0YSwgY29sb3JzLCB0aWNrQ291bnQgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjaGFydC5zZXQoJ2hlaWdodCcsIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuXG4gICAgY2hhcnQuc291cmNlKGRhdGEsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGlja0NvdW50LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmdldCgnZ2VvbXMnKS5mb3JFYWNoKGcgPT4ge1xuICAgICAgZy5jb2xvcignbmFtZScsIGNvbG9ycyk7XG4gICAgfSk7XG5cbiAgICBjaGFydC5yZXBhaW50KCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgY2RyLCBjaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcbiAgICAgIC5nZXQoJ2dlb21zJylbMF1cbiAgICAgIC5nZXQoJ2RhdGFBcnJheScpXG4gICAgICAubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgICAgY29sb3I6IGl0ZW1bMF0uY29sb3IsXG4gICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogaXRlbS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLl9vcmlnaW4udmFsdWUsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBsZWdlbmREYXRhLCBjaGFydCB9ID0gdGhpcztcbiAgICBsZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhbGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubGVnZW5kRGF0YS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IHRydWUpKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==