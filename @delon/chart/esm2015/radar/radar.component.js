/**
 * @fileoverview added by tsickle
 * Generated from: radar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @return {?}
     */
    get chart() {
        return this._chart;
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
        const chart = (this._chart = new Chart({
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
        const { _chart, padding, data, colors, tickCount } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        _chart.height = this.getHeight();
        _chart.padding = padding;
        _chart.scale({
            value: {
                min: 0,
                tickCount,
            },
        });
        _chart.geometries.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color('name', colors)));
        _chart.changeData(data);
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
        const { hasLegend, cdr, _chart } = this;
        if (!hasLegend)
            return;
        this.legendData = _chart.geometries[0].dataArray.map((/**
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
        const { legendData, _chart } = this;
        legendData[i].checked = !legendData[i].checked;
        _chart.render();
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
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
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
    /** @type {?} */
    G2RadarComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2RadarComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2RadarComponent.ngAcceptInputType_hasLegend;
    /** @type {?} */
    G2RadarComponent.ngAcceptInputType_tickCount;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype._chart;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcmFkYXIvcmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQzs7OztBQUV2RyxpQ0FLQzs7O0lBSkMsMkJBQWE7O0lBQ2IsNEJBQWM7O0lBQ2QsNEJBQWM7Ozs7OztBQUloQixzQ0FHQzs7O0lBRkMsZ0NBQWtCOztJQUNsQiw4QkFBVTs7QUFlWixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQTZCM0IsWUFBb0IsR0FBc0IsRUFBVSxNQUFjLEVBQUUsU0FBNkIsRUFBVSxRQUFrQjtRQUF6RyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXJCN0gsZUFBVSxHQUFVLEVBQUUsQ0FBQzs7UUFRQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixZQUFPLEdBQStCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzdC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QUE2Qzs7SUFDN0MsNkNBQWlEOztJQUNqRCw2Q0FBZ0Q7Ozs7O0lBRWhELGdDQUFtRTs7Ozs7SUFDbkUsa0NBQXNCOztJQUN0QixzQ0FBdUI7O0lBUXZCLGlDQUFrQzs7SUFDbEMsaUNBQTJDOztJQUMzQyxrQ0FBbUM7O0lBQ25DLG1DQUFnRTs7SUFDaEUscUNBQTBDOztJQUMxQyxxQ0FBc0M7O0lBQ3RDLGdDQUFrQzs7SUFDbEMsa0NBQTJHOztJQUMzRyxpQ0FBMkM7O0lBQzNDLHFDQUEyRDs7Ozs7SUFJL0MsK0JBQThCOzs7OztJQUFFLGtDQUFzQjs7Ozs7SUFBaUMsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyUmFkYXJEYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJSYWRhckNsaWNrSXRlbSB7XG4gIGl0ZW06IEcyUmFkYXJEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXJhZGFyJyxcbiAgZXhwb3J0QXM6ICdnMlJhZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICAgICdbY2xhc3MuZzItcmFkYXJdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyUmFkYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNMZWdlbmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RpY2tDb3VudDogTnVtYmVySW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9jaGFydDogQ2hhcnQ7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFs0NCwgMzAsIDE2LCAzMF07XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0aWNrQ291bnQgPSA0O1xuICBASW5wdXQoKSBkYXRhOiBHMlJhZGFyRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9ycyA9IFsnIzE4OTBGRicsICcjRkFDQzE0JywgJyMyRkMyNUInLCAnIzg1NDNFMCcsICcjRjA0ODY0JywgJyMxM0MyQzInLCAnI2ZhOGMxNicsICcjYTBkOTExJ107XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgfCBUeXBlcy5Mb29zZU9iamVjdDtcbiAgQE91dHB1dCgpIGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJSYWRhckNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBjb25maWdTcnYuYXR0YWNoS2V5KHRoaXMsICdjaGFydCcsICd0aGVtZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSAodGhpcy5oYXNMZWdlbmQgPyA4MCA6IDIyKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG5vZGUsIHBhZGRpbmcsIHRoZW1lIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcblxuICAgIGNoYXJ0LmNvb3JkaW5hdGUoJ3BvbGFyJyk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKCdsYWJlbCcsIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBvZmZzZXQ6IDgsXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHR5cGU6ICdwb2x5Z29uJyxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmZpbHRlcignbmFtZScsIChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGxlZ2VuZEl0ZW0gPSB0aGlzLmxlZ2VuZERhdGEuZmluZCh3ID0+IHcubmFtZSA9PT0gbmFtZSk7XG4gICAgICByZXR1cm4gbGVnZW5kSXRlbSA/IGxlZ2VuZEl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UgOiB0cnVlO1xuICAgIH0pO1xuXG4gICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCdsYWJlbCp2YWx1ZScpO1xuXG4gICAgY2hhcnQucG9pbnQoKS5wb3NpdGlvbignbGFiZWwqdmFsdWUnKS5zaGFwZSgnY2lyY2xlJykuc2l6ZSgzKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgY2hhcnQub24oYHBvaW50OmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgX2NoYXJ0LCBwYWRkaW5nLCBkYXRhLCBjb2xvcnMsIHRpY2tDb3VudCB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBfY2hhcnQuaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgX2NoYXJ0LnNjYWxlKHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGlja0NvdW50LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIF9jaGFydC5nZW9tZXRyaWVzLmZvckVhY2goZyA9PiBnLmNvbG9yKCduYW1lJywgY29sb3JzKSk7XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgY2RyLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgaWYgKCFoYXNMZWdlbmQpIHJldHVybjtcblxuICAgIHRoaXMubGVnZW5kRGF0YSA9IF9jaGFydC5nZW9tZXRyaWVzWzBdLmRhdGFBcnJheS5tYXAoaXRlbSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6IG9yaWdpbi5uYW1lLFxuICAgICAgICBjb2xvcjogaXRlbVswXS5jb2xvcixcbiAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGl0ZW0ucmVkdWNlKChwLCBuKSA9PiBwICsgbi5fb3JpZ2luLnZhbHVlLCAwKSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgX2NoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmxlZ2VuZERhdGEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSB0cnVlKSk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==