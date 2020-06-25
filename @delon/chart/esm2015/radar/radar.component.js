/**
 * @fileoverview added by tsickle
 * Generated from: radar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';
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
/**
 * @record
 */
export function G2RadarClickItem() { }
if (false) {
    /** @type {?} */
    G2RadarClickItem.prototype.item;
    /** @type {?} */
    G2RadarClickItem.prototype.ev;
}
export class G2RadarComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} ngZone
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(cdr, ngZone, configSrv, platform) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        this.legendData = [];
        // #region fields
        this.delay = 0;
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
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
        const { node, padding, theme } = this;
        /** @type {?} */
        const chart = (this.chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme,
        }));
        chart.coordinate('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            label: {
                offset: 8,
            },
            grid: {
                line: {
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
                },
            },
        });
        chart.axis('value', {
            grid: {
                line: {
                    type: 'polygon',
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
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
        chart.point().position('label*value').shape('circle').size(3);
        chart.render();
        chart.on(`point:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
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
        chart.height = this.getHeight();
        chart.padding = padding;
        chart.scale({
            value: {
                min: 0,
                tickCount,
            },
        });
        chart.geometries.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color('name', colors)));
        chart.changeData(data);
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
        this.legendData = chart.geometries[0].dataArray.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
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
        chart.render();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
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
                template: "<ng-container *nzStringTemplateOutlet=\"title\">\n  <h4>{{ title }}</h4>\n</ng-container>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\" class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{ 'background-color': !i.checked ? '#aaa' : i.color }\"></i>\n    {{ i.name }}\n    <h6 class=\"g2-radar__legend-title\">{{ i.value }}</h6>\n  </div>\n</div>\n",
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
G2RadarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: AlainConfigService },
    { type: Platform }
];
G2RadarComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    hasLegend: [{ type: Input }],
    tickCount: [{ type: Input }],
    data: [{ type: Input }],
    colors: [{ type: Input }],
    theme: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2RadarComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2RadarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2RadarComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
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
    /** @type {?} */
    G2RadarComponent.prototype.theme;
    /** @type {?} */
    G2RadarComponent.prototype.clickItem;
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
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRTVFLGlDQUtDOzs7SUFKQywyQkFBYTs7SUFDYiw0QkFBYzs7SUFDZCw0QkFBYzs7Ozs7O0FBSWhCLHNDQUdDOzs7SUFGQyxnQ0FBa0I7O0lBQ2xCLDhCQUFVOztBQWVaLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7O0lBb0IzQixZQUFvQixHQUFzQixFQUFVLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQXpHLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBakI3SCxlQUFVLEdBQVUsRUFBRSxDQUFDOztRQUlDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFlBQU8sR0FBK0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDN0IsU0FBSSxHQUFrQixFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRWpHLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUt6RCxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVPLE9BQU87Y0FDUCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTs7Y0FFL0IsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDN0IsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsQ0FBQzthQUNWO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUU7d0JBQ0wsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLFNBQVMsRUFBRSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2pCO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRTt3QkFDTCxNQUFNLEVBQUUsU0FBUzt3QkFDakIsU0FBUyxFQUFFLENBQUM7d0JBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDakI7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7O2tCQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQztZQUM3RCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxDQUFDLEVBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVmLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYTs7OztRQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsV0FBQyxPQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxRQUFFLEVBQUUsQ0FBQyxJQUFJLDBDQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBLEVBQUEsRUFBQyxDQUFDO1FBQzFFLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sV0FBVztjQUNYLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUk7UUFDeEQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRWhELEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUzthQUNWO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBQyxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVPLFNBQVM7Y0FDVCxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTtRQUN0QyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNuRCxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87O2tCQUN4QixNQUFNLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTs7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDO2FBQ3JEO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBUztjQUNSLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUk7UUFDbEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDcEYsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7WUE5SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsU0FBUztnQkFDbkIseWlCQUFxQztnQkFDckMsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLFFBQVE7b0JBQzdCLGtCQUFrQixFQUFFLE1BQU07aUJBQzNCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQXhDQyxpQkFBaUI7WUFLakIsTUFBTTtZQVVDLGtCQUFrQjtZQWxCbEIsUUFBUTs7O21CQTZDZCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFNdkMsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsTUFBTTs7QUFUaUI7SUFBZCxXQUFXLEVBQUU7OytDQUFXO0FBRVY7SUFBZCxXQUFXLEVBQUU7O2dEQUFZO0FBRVY7SUFBZixZQUFZLEVBQUU7O21EQUFrQjtBQUNsQjtJQUFkLFdBQVcsRUFBRTs7bURBQWU7Ozs7OztJQVh0QyxnQ0FBbUU7Ozs7O0lBQ25FLGlDQUFxQjs7SUFDckIsc0NBQXVCOztJQUl2QixpQ0FBa0M7O0lBQ2xDLGlDQUEyQzs7SUFDM0Msa0NBQW1DOztJQUNuQyxtQ0FBZ0U7O0lBQ2hFLHFDQUEwQzs7SUFDMUMscUNBQXNDOztJQUN0QyxnQ0FBa0M7O0lBQ2xDLGtDQUEyRzs7SUFDM0csaUNBQTJDOztJQUMzQyxxQ0FBMkQ7Ozs7O0lBSS9DLCtCQUE4Qjs7Ozs7SUFBRSxrQ0FBc0I7Ozs7O0lBQWlDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlJhZGFyRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUmFkYXJDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlJhZGFyRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1yYWRhcicsXG4gIGV4cG9ydEFzOiAnZzJSYWRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgICAnW2NsYXNzLmcyLXJhZGFyXSc6ICd0cnVlJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMlJhZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbNDQsIDMwLCAxNiwgMzBdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdGlja0NvdW50ID0gNDtcbiAgQElucHV0KCkgZGF0YTogRzJSYWRhckRhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBjb2xvcnMgPSBbJyMxODkwRkYnLCAnI0ZBQ0MxNCcsICcjMkZDMjVCJywgJyM4NTQzRTAnLCAnI0YwNDg2NCcsICcjMTNDMkMyJywgJyNmYThjMTYnLCAnI2EwZDkxMSddO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyUmFkYXJDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodCAtICh0aGlzLmhhc0xlZ2VuZCA/IDgwIDogMjIpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgcGFkZGluZywgdGhlbWUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG5cbiAgICBjaGFydC5jb29yZGluYXRlKCdwb2xhcicpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcygnbGFiZWwnLCB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgb2Zmc2V0OiA4LFxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBzdHJva2U6ICcjZTllOWU5JyxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBncmlkOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICB0eXBlOiAncG9seWdvbicsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5maWx0ZXIoJ25hbWUnLCAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBsZWdlbmRJdGVtID0gdGhpcy5sZWdlbmREYXRhLmZpbmQodyA9PiB3Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgcmV0dXJuIGxlZ2VuZEl0ZW0gPyBsZWdlbmRJdGVtLmNoZWNrZWQgIT09IGZhbHNlIDogdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbignbGFiZWwqdmFsdWUnKTtcblxuICAgIGNoYXJ0LnBvaW50KCkucG9zaXRpb24oJ2xhYmVsKnZhbHVlJykuc2hhcGUoJ2NpcmNsZScpLnNpemUoMyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIGNoYXJ0Lm9uKGBwb2ludDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBwYWRkaW5nLCBkYXRhLCBjb2xvcnMsIHRpY2tDb3VudCB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcblxuICAgIGNoYXJ0LmhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB0aWNrQ291bnQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuZ2VvbWV0cmllcy5mb3JFYWNoKGcgPT4gZy5jb2xvcignbmFtZScsIGNvbG9ycykpO1xuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgY2RyLCBjaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnQuZ2VvbWV0cmllc1swXS5kYXRhQXJyYXkubWFwKGl0ZW0gPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBvcmlnaW4ubmFtZSxcbiAgICAgICAgY29sb3I6IGl0ZW1bMF0uY29sb3IsXG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiBpdGVtLnJlZHVjZSgocCwgbikgPT4gcCArIG4uX29yaWdpbi52YWx1ZSwgMCksXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubGVnZW5kRGF0YS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IHRydWUpKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==