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
export class G2PieComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} rend
     * @param {?} ngZone
     * @param {?} cdr
     */
    constructor(el, rend, ngZone, cdr) {
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
    setCls() {
        const { el, rend, hasLegend, isPercent } = this;
        /** @type {?} */
        const ne = (/** @type {?} */ (el.nativeElement));
        updateHostClass(ne, rend, {
            'g2-pie': true,
            'g2-pie__legend-has': hasLegend,
            'g2-pie__legend-block': hasLegend && ne.clientWidth <= 380,
            'g2-pie__mini': isPercent,
        }, true);
    }
    /**
     * @private
     * @return {?}
     */
    fixData() {
        const { percent, color } = this;
        this.isPercent = percent != null;
        if (this.isPercent) {
            this.select = false;
            this.tooltip = false;
            this.percentColor = (/**
             * @param {?} value
             * @return {?}
             */
            value => value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5');
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
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        this.setCls();
        const { node, height, padding, animate, tooltip, inner, hasLegend } = this;
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height,
            padding,
            animate,
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
        (val, item) => item.checked !== false));
        chart
            .intervalStack()
            .position('y')
            .tooltip('x*percent', (/**
         * @param {?} name
         * @param {?} p
         * @return {?}
         */
        (name, p) => ({
            name,
            // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
            value: hasLegend ? p : (p * 100).toFixed(2),
        })))
            .select(this.select);
        chart.render();
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, height, padding, animate, data, lineWidth, isPercent, percentColor, colors, } = this;
        if (!chart)
            return;
        chart.set('height', height);
        chart.set('padding', padding);
        chart.set('animate', animate);
        chart
            .get('geoms')[0]
            .style({ lineWidth, stroke: '#fff' })
            .color('x', isPercent ? percentColor : colors);
        /** @type {?} */
        const dv = new DataSet.DataView();
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
        () => this.genLegend()));
    }
    /**
     * @private
     * @return {?}
     */
    genLegend() {
        const { hasLegend, isPercent, cdr, chart } = this;
        if (!hasLegend || isPercent)
            return;
        this.legendData = chart
            .get('geoms')[0]
            .get('dataArray')
            .map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        }));
        cdr.detectChanges();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    _click(i) {
        const { legendData, chart } = this;
        legendData[i].checked = !legendData[i].checked;
        chart.repaint();
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        if (this.resize$ || !this.hasLegend)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        () => this.setCls()));
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
        this.fixData();
        this.setCls();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
        this.installResizeEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.chart.destroy()));
        }
    }
}
G2PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-pie',
                template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\"\n       class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\"\n        class=\"g2-pie__total-title\">\n      <ng-container *stringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\"\n         class=\"g2-pie__total-stat\">\n      <ng-container *stringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\"\n    class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\"\n      (click)=\"_click(index)\"\n      class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\"\n          [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\"\n          [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2PieComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs5QywrQkFJQzs7O0lBSEMsc0JBQU87O0lBQ1Asc0JBQVU7OztBQVNaLE1BQU0sT0FBTyxjQUFjOzs7Ozs7OztJQTZCekIsWUFDVSxFQUFjLEVBQ2QsSUFBZSxFQUNmLE1BQWMsRUFDZCxHQUFzQjtRQUh0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVztRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTNCaEMsZUFBVSxHQUFVLEVBQUUsQ0FBQzs7UUFJQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFHcEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5CLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNiLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFOUIsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFVN0IsQ0FBQzs7Ozs7SUFFSSxNQUFNO2NBQ04sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJOztjQUN6QyxFQUFFLEdBQUcsbUJBQUEsRUFBRSxDQUFDLGFBQWEsRUFBZTtRQUMxQyxlQUFlLENBQ2IsRUFBRSxFQUNGLElBQUksRUFDSjtZQUNFLFFBQVEsRUFBRSxJQUFJO1lBQ2Qsb0JBQW9CLEVBQUUsU0FBUztZQUMvQixzQkFBc0IsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLFdBQVcsSUFBSSxHQUFHO1lBQzFELGNBQWMsRUFBRSxTQUFTO1NBQzFCLEVBQ0QsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLE9BQU87Y0FDUCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVk7Ozs7WUFBRyxLQUFLLENBQUMsRUFBRSxDQUMxQixLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksMEJBQTBCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQSxDQUFDO1lBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1Y7b0JBQ0UsQ0FBQyxFQUFFLElBQUk7b0JBQ1AsQ0FBQyxFQUFFLE9BQU87aUJBQ1g7Z0JBQ0Q7b0JBQ0UsQ0FBQyxFQUFFLElBQUk7b0JBQ1AsQ0FBQyxFQUFFLEdBQUcsR0FBRyxPQUFPO2lCQUNqQjthQUNGLENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBRU8sT0FBTztRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztjQUVSLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSTs7Y0FDcEUsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzdCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTTtZQUNOLE9BQU87WUFDUCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNMLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLE9BQU8sRUFDTCxxR0FBcUc7YUFDeEcsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUU3QyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUc7Ozs7O1FBQUUsQ0FBQyxHQUFRLEVBQUUsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBQyxDQUFDO1FBRW5FLEtBQUs7YUFDRixhQUFhLEVBQUU7YUFDZixRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ2IsT0FBTyxDQUFDLFdBQVc7Ozs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLElBQUk7O1lBRUosS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzVDLENBQUMsRUFBQzthQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sV0FBVztjQUNYLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFDTixPQUFPLEVBQ1AsT0FBTyxFQUNQLElBQUksRUFDSixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEdBQ1AsR0FBRyxJQUFJO1FBQ1IsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBRW5CLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlCLEtBQUs7YUFDRixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2YsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUNwQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Y0FFM0MsRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUNqQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUN4QixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsU0FBUyxFQUFFLEdBQUc7WUFDZCxFQUFFLEVBQUUsU0FBUztTQUNkLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2YsQ0FBQyxFQUFFO2dCQUNELElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZDtTQUNGLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU8sU0FBUztjQUNULEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTtRQUNqRCxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVM7WUFBRSxPQUFPO1FBRXBDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSzthQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2YsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUNoQixHQUFHOzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs7a0JBQ1gsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQzlCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM3QixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN0QixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQUM7UUFFTCxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBUztjQUNSLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7UUFDbEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUU1QyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7O1lBck5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsK3JDQUFtQztnQkFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUEzQkMsVUFBVTtZQU1WLFNBQVM7WUFKVCxNQUFNO1lBSk4saUJBQWlCOzs7bUJBZ0NoQixTQUFTLFNBQUMsV0FBVztvQkFRckIsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSzs7QUFma0I7SUFBZCxXQUFXLEVBQUU7OzZDQUFXO0FBQ1Q7SUFBZixZQUFZLEVBQUU7OytDQUFnQjtBQUloQjtJQUFkLFdBQVcsRUFBRTs7OENBQVk7QUFDVjtJQUFmLFlBQVksRUFBRTs7aURBQW1CO0FBR25CO0lBQWQsV0FBVyxFQUFFOzsrQ0FBaUI7QUFDZjtJQUFmLFlBQVksRUFBRTs7K0NBQWdCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOztpREFBZTtBQUNiO0lBQWYsWUFBWSxFQUFFOzs4Q0FBZTs7Ozs7O0lBckJ2QyxpQ0FBOEI7Ozs7O0lBQzlCLDhCQUFpRDs7Ozs7SUFDakQsK0JBQW1COzs7OztJQUNuQixtQ0FBMkI7Ozs7O0lBQzNCLHNDQUEwQjs7SUFDMUIsb0NBQXVCOztJQUl2QiwrQkFBa0M7O0lBQ2xDLGlDQUF3Qzs7SUFDeEMsK0JBQTRDOztJQUM1QyxrQ0FBOEM7O0lBQzlDLCtCQUEyQzs7SUFDM0MsZ0NBQW1DOztJQUNuQyxtQ0FBMkM7O0lBQzNDLCtCQUFzQjs7SUFDdEIsaUNBQTRDOztJQUM1QyxpQ0FBd0M7O0lBQ3hDLGlDQUF3Qzs7SUFDeEMsbUNBQXNDOztJQUN0QyxnQ0FBdUM7O0lBQ3ZDLHFDQUE0Qzs7SUFDNUMsOEJBQWdDOztJQUNoQyxnQ0FBdUI7Ozs7O0lBS3JCLDRCQUFzQjs7Ozs7SUFDdEIsOEJBQXVCOzs7OztJQUN2QixnQ0FBc0I7Ozs7O0lBQ3RCLDZCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBhbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1waWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBpc1BlcmNlbnQ6IGJvb2xlYW47XG4gIHByaXZhdGUgcGVyY2VudENvbG9yOiBhbnk7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5uZXIgPSAwLjc1O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFsxMiwgMCwgMTIsIDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGluZVdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0OiAoeTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUGllRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yczogYW55W107XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIHNldENscygpIHtcbiAgICBjb25zdCB7IGVsLCByZW5kLCBoYXNMZWdlbmQsIGlzUGVyY2VudCB9ID0gdGhpcztcbiAgICBjb25zdCBuZSA9IGVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdXBkYXRlSG9zdENsYXNzKFxuICAgICAgbmUsXG4gICAgICByZW5kLFxuICAgICAge1xuICAgICAgICAnZzItcGllJzogdHJ1ZSxcbiAgICAgICAgJ2cyLXBpZV9fbGVnZW5kLWhhcyc6IGhhc0xlZ2VuZCxcbiAgICAgICAgJ2cyLXBpZV9fbGVnZW5kLWJsb2NrJzogaGFzTGVnZW5kICYmIG5lLmNsaWVudFdpZHRoIDw9IDM4MCxcbiAgICAgICAgJ2cyLXBpZV9fbWluaSc6IGlzUGVyY2VudCxcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZpeERhdGEoKSB7XG4gICAgY29uc3QgeyBwZXJjZW50LCBjb2xvciB9ID0gdGhpcztcbiAgICB0aGlzLmlzUGVyY2VudCA9IHBlcmNlbnQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5pc1BlcmNlbnQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcbiAgICAgIHRoaXMucGVyY2VudENvbG9yID0gdmFsdWUgPT5cbiAgICAgICAgdmFsdWUgPT09ICfljaDmr5QnID8gY29sb3IgfHwgJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KScgOiAnI0YwRjJGNSc7XG4gICAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y2g5q+UJyxcbiAgICAgICAgICB5OiBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WPjeavlCcsXG4gICAgICAgICAgeTogMTAwIC0gcGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMuc2V0Q2xzKCk7XG5cbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgYW5pbWF0ZSwgdG9vbHRpcCwgaW5uZXIsIGhhc0xlZ2VuZCB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgYW5pbWF0ZSxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgaXRlbVRwbDpcbiAgICAgICAgICAnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7Y29sb3J9O1wiIGNsYXNzPVwiZzItdG9vbHRpcC1tYXJrZXJcIj48L3NwYW4+e25hbWV9OiB7dmFsdWV9ICU8L2xpPicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuXG4gICAgY2hhcnQuY29vcmQoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogaW5uZXIgfSk7XG5cbiAgICBjaGFydC5maWx0ZXIoJ3gnLCAodmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkICE9PSBmYWxzZSk7XG5cbiAgICBjaGFydFxuICAgICAgLmludGVydmFsU3RhY2soKVxuICAgICAgLnBvc2l0aW9uKCd5JylcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAobmFtZSwgcCkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8g55Sx5LqOIGhhc0xlZ2VuZCDkvJrkvJjlhYjlpITnkIbkuLrnmb7liIbmr5TmoLzlvI/vvIzlm6DmraTml6DpnIDopoHlnKggdG9vbHRpcCDkuK3ph43mlrDovazmjaJcbiAgICAgICAgdmFsdWU6IGhhc0xlZ2VuZCA/IHAgOiAocCAqIDEwMCkudG9GaXhlZCgyKSxcbiAgICAgIH0pKVxuICAgICAgLnNlbGVjdCh0aGlzLnNlbGVjdCk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhcnQsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgYW5pbWF0ZSxcbiAgICAgIGRhdGEsXG4gICAgICBsaW5lV2lkdGgsXG4gICAgICBpc1BlcmNlbnQsXG4gICAgICBwZXJjZW50Q29sb3IsXG4gICAgICBjb2xvcnMsXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCkgcmV0dXJuO1xuXG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuICAgIGNoYXJ0LnNldCgnYW5pbWF0ZScsIGFuaW1hdGUpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5nZXQoJ2dlb21zJylbMF1cbiAgICAgIC5zdHlsZSh7IGxpbmVXaWR0aCwgc3Ryb2tlOiAnI2ZmZicgfSlcbiAgICAgIC5jb2xvcigneCcsIGlzUGVyY2VudCA/IHBlcmNlbnRDb2xvciA6IGNvbG9ycyk7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LkRhdGFWaWV3KCk7XG4gICAgZHYuc291cmNlKGRhdGEpLnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAncGVyY2VudCcsXG4gICAgICBmaWVsZDogJ3knLFxuICAgICAgZGltZW5zaW9uOiAneCcsXG4gICAgICBhczogJ3BlcmNlbnQnLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZShkdiwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQucmVwYWludCgpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZ2VuTGVnZW5kKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MZWdlbmQoKSB7XG4gICAgY29uc3QgeyBoYXNMZWdlbmQsIGlzUGVyY2VudCwgY2RyLCBjaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCB8fCBpc1BlcmNlbnQpIHJldHVybjtcblxuICAgIHRoaXMubGVnZW5kRGF0YSA9IGNoYXJ0XG4gICAgICAuZ2V0KCdnZW9tcycpWzBdXG4gICAgICAuZ2V0KCdkYXRhQXJyYXknKVxuICAgICAgLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcbiAgICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgIH0pO1xuXG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgY2hhcnQucmVwYWludCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplJCB8fCAhdGhpcy5oYXNMZWdlbmQpIHJldHVybjtcblxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q2xzKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maXhEYXRhKCk7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==