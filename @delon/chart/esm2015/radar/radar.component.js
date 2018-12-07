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
export class G2RadarComponent {
    // #endregion
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
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
     * @return {?}
     */
    getHeight() {
        return this.height - (this.hasLegend ? 80 : 22);
    }
    /**
     * @return {?}
     */
    install() {
        const { node, padding } = this;
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: this.getHeight(),
            padding,
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
        chart.filter('name', (name) => {
            /** @type {?} */
            const legendItem = this.legendData.find(w => w.name === name);
            return legendItem ? legendItem.checked !== false : true;
        });
        chart
            .line()
            .position('label*value');
        chart
            .point()
            .position('label*value')
            .shape('circle')
            .size(3);
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, padding, data, colors, tickCount } = this;
        if (!chart)
            return;
        chart.set('height', this.getHeight());
        chart.set('padding', padding);
        chart.source(data, {
            value: {
                min: 0,
                tickCount,
            },
        });
        chart.get('geoms').forEach(g => {
            g.color('name', colors);
        });
        chart.repaint();
        this.genLegend();
    }
    /**
     * @return {?}
     */
    genLegend() {
        const { hasLegend, cdr, chart } = this;
        if (!hasLegend)
            return;
        this.legendData = chart.get('geoms')[0].get('dataArray').map((item) => {
            /** @type {?} */
            const origin = item[0]._origin;
            /** @type {?} */
            const result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((p, n) => p + n._origin.value, 0),
            };
            return result;
        });
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
        setTimeout(() => this.install(), this.delay);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.legendData.forEach(i => i.checked = true);
        this.attachChart();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
}
G2RadarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-radar',
                template: "<ng-container *stringTemplateOutlet=\"title\"><h4>{{title}}</h4></ng-container>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\"\n    (click)=\"_click(idx)\" class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                host: { '[class.g2-radar]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2RadarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFLTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFJeEQsaUNBS0M7OztJQUpDLDJCQUFhOztJQUNiLDRCQUFjOztJQUNkLDRCQUFjOzs7QUFVaEIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUEyQjNCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeEIxQyxlQUFVLEdBQVUsRUFBRSxDQUFDOztRQUlDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFc0IsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0IsU0FBSSxHQUFrQixFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFHO1lBQ2hCLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQztJQUk0QyxDQUFDOzs7O0lBRXZDLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFF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ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyUmFkYXJEYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXJhZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLXJhZGFyXSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJSYWRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgbGVnZW5kRGF0YTogYW55W10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlcltdID0gWzQ0LCAzMCwgMTYsIDMwXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRpY2tDb3VudCA9IDQ7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUmFkYXJEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgY29sb3JzID0gW1xuICAgICcjMTg5MEZGJyxcbiAgICAnI0ZBQ0MxNCcsXG4gICAgJyMyRkMyNUInLFxuICAgICcjODU0M0UwJyxcbiAgICAnI0YwNDg2NCcsXG4gICAgJyMxM0MyQzInLFxuICAgICcjZmE4YzE2JyxcbiAgICAnI2EwZDkxMScsXG4gIF07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgcHJpdmF0ZSBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0IC0gKHRoaXMuaGFzTGVnZW5kID8gODAgOiAyMik7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBwYWRkaW5nIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICBwYWRkaW5nLFxuICAgIH0pO1xuXG4gICAgY2hhcnQuY29vcmQoJ3BvbGFyJyk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKCdsYWJlbCcsIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbE9mZnNldDogOCxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIC42NSknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgdHlwZTogJ3BvbHlnb24nLFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmZpbHRlcignbmFtZScsIChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGxlZ2VuZEl0ZW0gPSB0aGlzLmxlZ2VuZERhdGEuZmluZCh3ID0+IHcubmFtZSA9PT0gbmFtZSk7XG4gICAgICByZXR1cm4gbGVnZW5kSXRlbSA/IGxlZ2VuZEl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UgOiB0cnVlO1xuICAgIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5saW5lKClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKTtcblxuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoKVxuICAgICAgLnBvc2l0aW9uKCdsYWJlbCp2YWx1ZScpXG4gICAgICAuc2hhcGUoJ2NpcmNsZScpXG4gICAgICAuc2l6ZSgzKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBwYWRkaW5nLCBkYXRhLCBjb2xvcnMsIHRpY2tDb3VudCB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0KSByZXR1cm4gO1xuXG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGNoYXJ0LnNvdXJjZShkYXRhLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIHRpY2tDb3VudCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5nZXQoJ2dlb21zJykuZm9yRWFjaChnID0+IHtcbiAgICAgIGcuY29sb3IoJ25hbWUnLCBjb2xvcnMpO1xuICAgIH0pO1xuXG4gICAgY2hhcnQucmVwYWludCgpO1xuXG4gICAgdGhpcy5nZW5MZWdlbmQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuTGVnZW5kKCkge1xuICAgIGNvbnN0IHsgaGFzTGVnZW5kLCBjZHIsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGlmICghaGFzTGVnZW5kKSByZXR1cm47XG5cbiAgICB0aGlzLmxlZ2VuZERhdGEgPSBjaGFydC5nZXQoJ2dlb21zJylbMF0uZ2V0KCdkYXRhQXJyYXknKS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBvcmlnaW4ubmFtZSxcbiAgICAgICAgY29sb3I6IGl0ZW1bMF0uY29sb3IsXG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiBpdGVtLnJlZHVjZSgocCwgbikgPT4gcCArIG4uX29yaWdpbi52YWx1ZSwgMCksXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgY2hhcnQucmVwYWludCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmxlZ2VuZERhdGEuZm9yRWFjaChpID0+IGkuY2hlY2tlZCA9IHRydWUpO1xuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==