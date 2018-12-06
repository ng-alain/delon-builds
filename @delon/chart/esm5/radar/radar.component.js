/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, ViewChild, } from '@angular/core';
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
    function G2RadarComponent(cdr) {
        this.cdr = cdr;
        this.legendData = [];
        // #region fields
        this.delay = 0;
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = [
            '#1890FF',
            '#FACC14',
            '#2FC25B',
            '#8543E0',
            '#F04864',
            '#13C2C2',
            '#fa8c16',
            '#a0d911',
        ];
    }
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
    G2RadarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, node = _a.node, height = _a.height, hasLegend = _a.hasLegend, padding = _a.padding, colors = _a.colors;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: height - (hasLegend ? 80 : 22),
            padding: padding,
        });
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
        chart.filter('name', function (name) {
            /** @type {?} */
            var legendItem = _this.legendData.find(function (w) { return w.name === name; });
            return legendItem ? legendItem.checked !== false : true;
        });
        chart
            .line()
            .position('label*value')
            .color('name', colors);
        chart
            .point()
            .position('label*value')
            .color('name', colors)
            .shape('circle')
            .size(3);
        chart.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, hasLegend = _a.hasLegend, padding = _a.padding, data = _a.data, colors = _a.colors, tickCount = _a.tickCount;
        if (!chart)
            return;
        chart.set('height', height - (hasLegend ? 80 : 22));
        chart.set('padding', padding);
        chart.source(data, {
            value: {
                min: 0,
                tickCount: tickCount,
            },
        });
        chart.get('geoms').forEach(function (g) {
            g.color('name', colors);
        });
        chart.repaint();
        this.genLegend();
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.genLegend = /**
     * @return {?}
     */
    function () {
        var _a = this, hasLegend = _a.hasLegend, cdr = _a.cdr, chart = _a.chart;
        if (!hasLegend)
            return;
        this.legendData = chart.get('geoms')[0].get('dataArray').map(function (item) {
            /** @type {?} */
            var origin = item[0]._origin;
            /** @type {?} */
            var result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce(function (p, n) { return p + n._origin.value; }, 0),
            };
            return result;
        });
        cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.legendData.forEach(function (i) { return i.checked = true; });
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
        }
    };
    G2RadarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-radar',
                    template: "<ng-container *stringTemplateOutlet=\"title\"><h4>{{title}}</h4></ng-container>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\"\n    (click)=\"_click(idx)\" class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                    host: { '[class.g2-radar]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2RadarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    G2RadarComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container',] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
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
    /** @type {?} */
    G2RadarComponent.prototype.node;
    /** @type {?} */
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
    /** @type {?} */
    G2RadarComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFLTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFJeEQsaUNBS0M7OztJQUpDLDJCQUFhOztJQUNiLDRCQUFjOztJQUNkLDRCQUFjOzs7QUFJaEI7SUErQkUsYUFBYTtJQUViLDBCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXhCMUMsZUFBVSxHQUFVLEVBQUUsQ0FBQzs7UUFJQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXNCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDMUQsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBRztZQUNoQixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7SUFJNEMsQ0FBQzs7Ozs7SUFFL0MsaUNBQU07Ozs7SUFBTixVQUFPLENBQVM7UUFDUixJQUFBLFNBQTRCLEVBQTFCLDBCQUFVLEVBQUUsZ0JBQWM7UUFDbEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFTyxrQ0FBTzs7O0lBQWY7UUFBQSxpQkFxRUM7UUFwRU8sSUFBQSxTQUFtRCxFQUFqRCxjQUFJLEVBQUUsa0JBQU0sRUFBRSx3QkFBUyxFQUFFLG9CQUFPLEVBQUUsa0JBQWU7O1lBRW5ELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDN0IsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0QyxPQUFPLFNBQUE7U0FDUixDQUFDO1FBRUYsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksRUFBRSxJQUFJO1lBQ1YsV0FBVyxFQUFFLENBQUM7WUFDZCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSxvQkFBb0I7aUJBQzNCO2FBQ0Y7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFO29CQUNKLE1BQU0sRUFBRSxTQUFTO29CQUNqQixTQUFTLEVBQUUsQ0FBQztvQkFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsU0FBUztvQkFDakIsU0FBUyxFQUFFLENBQUM7b0JBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLG9CQUFvQjtpQkFDM0I7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxNQUFNLENBQ1YsTUFBTSxFQUNOLFVBQUMsSUFBWTs7Z0JBQ0wsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxDQUFDO1lBQzdELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFELENBQUMsQ0FDRixDQUFDO1FBRUYsS0FBSzthQUNGLElBQUksRUFBRTthQUNOLFFBQVEsQ0FBQyxhQUFhLENBQUM7YUFDdkIsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6QixLQUFLO2FBQ0YsS0FBSyxFQUFFO2FBQ1AsUUFBUSxDQUFDLGFBQWEsQ0FBQzthQUN2QixLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzthQUNyQixLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVgsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFTyxzQ0FBVzs7O0lBQW5CO1FBQ1EsSUFBQSxTQUFxRSxFQUFuRSxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsd0JBQVMsRUFBRSxvQkFBTyxFQUFFLGNBQUksRUFBRSxrQkFBTSxFQUFFLHdCQUFrQjtRQUMzRSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQVE7UUFFcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsV0FBQTthQUNWO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRU8sb0NBQVM7OztJQUFqQjtRQUNRLElBQUEsU0FBZ0MsRUFBOUIsd0JBQVMsRUFBRSxZQUFHLEVBQUUsZ0JBQWM7UUFDdEMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUzs7Z0JBQy9ELE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTzs7Z0JBQ3hCLE1BQU0sR0FBRztnQkFDYixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDcEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFuQixDQUFtQixFQUFFLENBQUMsQ0FBQzthQUNyRDtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOztnQkF2S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiw4aEJBQXFDO29CQUNyQyxJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7b0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkEzQkMsaUJBQWlCOzs7dUJBNkJoQixTQUFTLFNBQUMsV0FBVzt3QkFNckIsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLFdBQVcsU0FBQyxpQkFBaUIsY0FBRyxLQUFLOzBCQUNyQyxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBUGtCO1FBQWQsV0FBVyxFQUFFOzttREFBVztJQUVzQjtRQUFkLFdBQVcsRUFBRTs7b0RBQVk7SUFFMUM7UUFBZixZQUFZLEVBQUU7O3VEQUFrQjtJQUNsQjtRQUFkLFdBQVcsRUFBRTs7dURBQWU7SUFzSnhDLHVCQUFDO0NBQUEsQUF4S0QsSUF3S0M7U0FsS1ksZ0JBQWdCOzs7SUFDM0IsZ0NBQWlEOztJQUNqRCxpQ0FBbUI7O0lBQ25CLHNDQUF1Qjs7SUFJdkIsaUNBQWtDOztJQUNsQyxpQ0FBMkM7O0lBQzNDLGtDQUFtRTs7SUFDbkUsbUNBQThDOztJQUM5QyxxQ0FBMEM7O0lBQzFDLHFDQUFzQzs7SUFDdEMsZ0NBQWtDOztJQUNsQyxrQ0FTRTs7SUFJVSwrQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBHMlJhZGFyRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1yYWRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1yYWRhcl0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyUmFkYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKSBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFs0NCwgMzAsIDE2LCAzMF07XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0aWNrQ291bnQgPSA0O1xuICBASW5wdXQoKSBkYXRhOiBHMlJhZGFyRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9ycyA9IFtcbiAgICAnIzE4OTBGRicsXG4gICAgJyNGQUNDMTQnLFxuICAgICcjMkZDMjVCJyxcbiAgICAnIzg1NDNFMCcsXG4gICAgJyNGMDQ4NjQnLFxuICAgICcjMTNDMkMyJyxcbiAgICAnI2ZhOGMxNicsXG4gICAgJyNhMGQ5MTEnLFxuICBdO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgY2hhcnQucmVwYWludCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgaGVpZ2h0LCBoYXNMZWdlbmQsIHBhZGRpbmcsIGNvbG9ycyB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgLSAoaGFzTGVnZW5kID8gODAgOiAyMiksXG4gICAgICBwYWRkaW5nLFxuICAgIH0pO1xuXG4gICAgY2hhcnQuY29vcmQoJ3BvbGFyJyk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcblxuICAgIGNoYXJ0LmF4aXMoJ2xhYmVsJywge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsT2Zmc2V0OiA4LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBncmlkOiB7XG4gICAgICAgIHR5cGU6ICdwb2x5Z29uJyxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIC42NSknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmZpbHRlcihcbiAgICAgICduYW1lJyxcbiAgICAgIChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kSXRlbSA9IHRoaXMubGVnZW5kRGF0YS5maW5kKHcgPT4gdy5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgcmV0dXJuIGxlZ2VuZEl0ZW0gPyBsZWdlbmRJdGVtLmNoZWNrZWQgIT09IGZhbHNlIDogdHJ1ZTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGNoYXJ0XG4gICAgICAubGluZSgpXG4gICAgICAucG9zaXRpb24oJ2xhYmVsKnZhbHVlJylcbiAgICAgIC5jb2xvcignbmFtZScsIGNvbG9ycyk7XG5cbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKVxuICAgICAgLmNvbG9yKCduYW1lJywgY29sb3JzKVxuICAgICAgLnNoYXBlKCdjaXJjbGUnKVxuICAgICAgLnNpemUoMyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgaGVpZ2h0LCBoYXNMZWdlbmQsIHBhZGRpbmcsIGRhdGEsIGNvbG9ycywgdGlja0NvdW50IH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybiA7XG5cbiAgICBjaGFydC5zZXQoJ2hlaWdodCcsIGhlaWdodCAtIChoYXNMZWdlbmQgPyA4MCA6IDIyKSk7XG4gICAgY2hhcnQuc2V0KCdwYWRkaW5nJywgcGFkZGluZyk7XG5cbiAgICBjaGFydC5zb3VyY2UoZGF0YSwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB0aWNrQ291bnQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuZ2V0KCdnZW9tcycpLmZvckVhY2goZyA9PiB7XG4gICAgICBnLmNvbG9yKCduYW1lJywgY29sb3JzKTtcbiAgICB9KTtcblxuICAgIGNoYXJ0LnJlcGFpbnQoKTtcblxuICAgIHRoaXMuZ2VuTGVnZW5kKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgY2RyLCBjaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnQuZ2V0KCdnZW9tcycpWzBdLmdldCgnZGF0YUFycmF5JykubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgIGNvbG9yOiBpdGVtWzBdLmNvbG9yLFxuICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICB2YWx1ZTogaXRlbS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLl9vcmlnaW4udmFsdWUsIDApLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubGVnZW5kRGF0YS5mb3JFYWNoKGkgPT4gaS5jaGVja2VkID0gdHJ1ZSk7XG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19