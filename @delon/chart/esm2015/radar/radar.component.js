/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, } from '@angular/core';
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
export class G2RadarComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(cdr, ngZone) {
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
    getHeight() {
        return this.height - (this.hasLegend ? 80 : 22);
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { node, padding } = this;
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: this.getHeight(),
            padding,
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
        (name) => {
            /** @type {?} */
            const legendItem = this.legendData.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.name === name));
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
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, padding, data, colors, tickCount } = this;
        if (!chart || !data || data.length <= 0)
            return;
        chart.set('height', this.getHeight());
        chart.set('padding', padding);
        chart.source(data, {
            value: {
                min: 0,
                tickCount,
            },
        });
        chart.get('geoms').forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => {
            g.color('name', colors);
        }));
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
        const { hasLegend, cdr, chart } = this;
        if (!hasLegend)
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
            /** @type {?} */
            const result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((/**
                 * @param {?} p
                 * @param {?} n
                 * @return {?}
                 */
                (p, n) => p + n._origin.value), 0),
            };
            return result;
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
        this.legendData.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.checked = true)));
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
G2RadarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-radar',
                exportAs: 'g2Radar',
                template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n<div nz-row\n     class=\"g2-radar__legend\"\n     *ngIf=\"hasLegend\">\n  <div nz-col\n       [nzSpan]=\"24 / legendData.length\"\n       *ngFor=\"let i of legendData; let idx = index\"\n       (click)=\"_click(idx)\"\n       class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\"\n       [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                host: {
                    '[style.height.px]': 'height',
                    '[class.g2-radar]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2RadarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2RadarComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUl4RCxpQ0FLQzs7O0lBSkMsMkJBQWE7O0lBQ2IsNEJBQWM7O0lBQ2QsNEJBQWM7OztBQWNoQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFrQjNCLFlBQW9CLEdBQXNCLEVBQVUsTUFBYztRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFmbEUsZUFBVSxHQUFVLEVBQUUsQ0FBQzs7UUFJQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0IsU0FBSSxHQUFrQixFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBSXRDLENBQUM7Ozs7O0lBRTlELFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFD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SztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLOztBQVBrQjtJQUFkLFdBQVcsRUFBRTs7K0NBQVc7QUFFVjtJQUFkLFdBQVcsRUFBRTs7Z0RBQVk7QUFFVjtJQUFmLFlBQVksRUFBRTs7bURBQWtCO0FBQ2xCO0lBQWQsV0FBVyxFQUFFOzttREFBZTs7Ozs7O0lBWHRDLGdDQUFpRDs7Ozs7SUFDakQsaUNBQW1COztJQUNuQixzQ0FBdUI7O0lBSXZCLGlDQUFrQzs7SUFDbEMsaUNBQTJDOztJQUMzQyxrQ0FBbUM7O0lBQ25DLG1DQUE4Qzs7SUFDOUMscUNBQTBDOztJQUMxQyxxQ0FBc0M7O0lBQ3RDLGdDQUFrQzs7SUFDbEMsa0NBQTJHOzs7OztJQUkvRiwrQkFBOEI7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBHMlJhZGFyRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1yYWRhcicsXG4gIGV4cG9ydEFzOiAnZzJSYWRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgICAnW2NsYXNzLmcyLXJhZGFyXSc6ICd0cnVlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyUmFkYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbNDQsIDMwLCAxNiwgMzBdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdGlja0NvdW50ID0gNDtcbiAgQElucHV0KCkgZGF0YTogRzJSYWRhckRhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBjb2xvcnMgPSBbJyMxODkwRkYnLCAnI0ZBQ0MxNCcsICcjMkZDMjVCJywgJyM4NTQzRTAnLCAnI0YwNDg2NCcsICcjMTNDMkMyJywgJyNmYThjMTYnLCAnI2EwZDkxMSddO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC0gKHRoaXMuaGFzTGVnZW5kID8gODAgOiAyMik7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBwYWRkaW5nIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgcGFkZGluZyxcbiAgICB9KSk7XG5cbiAgICBjaGFydC5jb29yZCgncG9sYXInKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoJ2xhYmVsJywge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsT2Zmc2V0OiA4LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xuICAgICAgZ3JpZDoge1xuICAgICAgICB0eXBlOiAncG9seWdvbicsXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZTllOWU5JyxcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAuNjUpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuZmlsdGVyKCduYW1lJywgKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGVnZW5kSXRlbSA9IHRoaXMubGVnZW5kRGF0YS5maW5kKHcgPT4gdy5uYW1lID09PSBuYW1lKTtcbiAgICAgIHJldHVybiBsZWdlbmRJdGVtID8gbGVnZW5kSXRlbS5jaGVja2VkICE9PSBmYWxzZSA6IHRydWU7XG4gICAgfSk7XG5cbiAgICBjaGFydC5saW5lKCkucG9zaXRpb24oJ2xhYmVsKnZhbHVlJyk7XG5cbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKVxuICAgICAgLnNoYXBlKCdjaXJjbGUnKVxuICAgICAgLnNpemUoMyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgcGFkZGluZywgZGF0YSwgY29sb3JzLCB0aWNrQ291bnQgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjaGFydC5zZXQoJ2hlaWdodCcsIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuXG4gICAgY2hhcnQuc291cmNlKGRhdGEsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGlja0NvdW50LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmdldCgnZ2VvbXMnKS5mb3JFYWNoKGcgPT4ge1xuICAgICAgZy5jb2xvcignbmFtZScsIGNvbG9ycyk7XG4gICAgfSk7XG5cbiAgICBjaGFydC5yZXBhaW50KCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgY2RyLCBjaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcbiAgICAgIC5nZXQoJ2dlb21zJylbMF1cbiAgICAgIC5nZXQoJ2RhdGFBcnJheScpXG4gICAgICAubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgICAgY29sb3I6IGl0ZW1bMF0uY29sb3IsXG4gICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogaXRlbS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLl9vcmlnaW4udmFsdWUsIDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBsZWdlbmREYXRhLCBjaGFydCB9ID0gdGhpcztcbiAgICBsZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhbGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuICAgIGNoYXJ0LnJlcGFpbnQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubGVnZW5kRGF0YS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IHRydWUpKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==