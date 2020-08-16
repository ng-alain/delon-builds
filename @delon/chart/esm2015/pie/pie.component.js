/**
 * @fileoverview added by tsickle
 * Generated from: pie.component.ts
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
export function G2PieData() { }
if (false) {
    /** @type {?} */
    G2PieData.prototype.x;
    /** @type {?} */
    G2PieData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function G2PieClickItem() { }
if (false) {
    /** @type {?} */
    G2PieClickItem.prototype.item;
    /** @type {?} */
    G2PieClickItem.prototype.ev;
}
export class G2PieComponent {
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} cdr
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(el, ngZone, cdr, configSrv, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.platform = platform;
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
        this.blockMaxWidth = 380;
        this.select = true;
        this.data = [];
        this.interaction = 'none';
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    // #endregion
    /**
     * @return {?}
     */
    get block() {
        return this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
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
            (value) => (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'));
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
        const { node, height, padding, tooltip, inner, hasLegend, interaction, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        if (!tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                showMarkers: false,
            });
        }
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner });
        chart.filter('x', (/**
         * @param {?} _val
         * @param {?} item
         * @return {?}
         */
        (_val, item) => item.checked !== false));
        chart
            .interval()
            .adjust('stack')
            .position('y')
            .tooltip('x*percent', (/**
         * @param {?} name
         * @param {?} p
         * @return {?}
         */
        (name, p) => ({
            name,
            value: `${hasLegend ? p : (p * 100).toFixed(2)} %`,
        })))
            .state({});
        chart.on(`interval:click`, (/**
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
        const { _chart, height, padding, animate, data, lineWidth, isPercent, percentColor, colors } = this;
        if (!_chart)
            return;
        _chart.height = height;
        _chart.padding = padding;
        _chart.animate(animate);
        _chart.geometries[0].style({ lineWidth, stroke: '#fff' }).color('x', isPercent ? percentColor : colors);
        _chart.scale({
            x: {
                type: 'cat',
                range: [0, 1],
            },
        });
        // 转化 percent
        /** @type {?} */
        const totalSum = data.reduce((/**
         * @param {?} cur
         * @param {?} item
         * @return {?}
         */
        (cur, item) => cur + item.y), 0);
        for (const item of data) {
            item.percent = totalSum === 0 ? 0 : item.y / totalSum;
        }
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
        const { hasLegend, isPercent, cdr, _chart } = this;
        if (!hasLegend || isPercent)
            return;
        this.legendData = _chart.geometries[0].dataArray.map((/**
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
        this.fixData();
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
G2PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-pie',
                exportAs: 'g2Pie',
                template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{ 'background-color': !item.checked ? '#aaa' : item.color }\"></span>\n    <span class=\"g2-pie__legend-title\">{{ item.x }}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{ item.percent }}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                host: {
                    '[class.g2-pie]': 'true',
                    '[class.g2-pie__legend-has]': 'hasLegend',
                    '[class.g2-pie__legend-block]': 'block',
                    '[class.g2-pie__mini]': 'isPercent',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2PieComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: AlainConfigService },
    { type: Platform }
];
G2PieComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
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
    blockMaxWidth: [{ type: Input }],
    select: [{ type: Input }],
    valueFormat: [{ type: Input }],
    data: [{ type: Input }],
    colors: [{ type: Input }],
    interaction: [{ type: Input }],
    theme: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "delay", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "animate", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2PieComponent.prototype, "percent", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "tooltip", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "lineWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "blockMaxWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "select", void 0);
if (false) {
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_animate;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_hasLegend;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_percent;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_tooltip;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_lineWidth;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_blockMaxWidth;
    /** @type {?} */
    G2PieComponent.ngAcceptInputType_select;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype._chart;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.percentColor;
    /** @type {?} */
    G2PieComponent.prototype.legendData;
    /** @type {?} */
    G2PieComponent.prototype.isPercent;
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
    G2PieComponent.prototype.blockMaxWidth;
    /** @type {?} */
    G2PieComponent.prototype.select;
    /** @type {?} */
    G2PieComponent.prototype.valueFormat;
    /** @type {?} */
    G2PieComponent.prototype.data;
    /** @type {?} */
    G2PieComponent.prototype.colors;
    /** @type {?} */
    G2PieComponent.prototype.interaction;
    /** @type {?} */
    G2PieComponent.prototype.theme;
    /** @type {?} */
    G2PieComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.el;
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
    /**
     * @type {?}
     * @private
     */
    G2PieComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQzs7OztBQUd2RywrQkFJQzs7O0lBSEMsc0JBQU87O0lBQ1Asc0JBQVU7Ozs7OztBQUlaLG9DQUdDOzs7SUFGQyw4QkFBZ0I7O0lBQ2hCLDRCQUFVOztBQWlCWixNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7SUFrRHpCLFlBQ1UsRUFBMkIsRUFDM0IsTUFBYyxFQUNkLEdBQXNCLEVBQzlCLFNBQTZCLEVBQ3JCLFFBQWtCO1FBSmxCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUV0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBekM1QixlQUFVLEdBQWdCLEVBQUUsQ0FBQzs7UUFLTCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLElBQUksQ0FBQztRQUMvQixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFHcEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksQ0FB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QWU7QUFDZDtJQUFkLFdBQVcsRUFBRTs7cURBQXFCO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzs4Q0FBZTs7O0lBL0J2Qyx1Q0FBNEM7O0lBQzVDLHdDQUE2Qzs7SUFDN0MseUNBQStDOztJQUMvQywyQ0FBaUQ7O0lBQ2pELHlDQUE4Qzs7SUFDOUMseUNBQStDOztJQUMvQywyQ0FBZ0Q7O0lBQ2hELCtDQUFvRDs7SUFDcEQsd0NBQThDOzs7OztJQUU5Qyw4QkFBbUU7Ozs7O0lBQ25FLGdDQUFzQjs7Ozs7SUFDdEIsc0NBQWdEOztJQUNoRCxvQ0FBNkI7O0lBQzdCLG1DQUFtQjs7SUFJbkIsK0JBQWtDOztJQUNsQyxpQ0FBd0M7O0lBQ3hDLCtCQUE0Qzs7SUFDNUMsa0NBQThDOztJQUM5QywrQkFBMkM7O0lBQzNDLGdDQUFtQzs7SUFDbkMsbUNBQTJDOztJQUMzQywrQkFBc0I7O0lBQ3RCLGlDQUE4RDs7SUFDOUQsaUNBQXdDOztJQUN4QyxpQ0FBd0M7O0lBQ3hDLG1DQUFzQzs7SUFDdEMsdUNBQTRDOztJQUM1QyxnQ0FBdUM7O0lBQ3ZDLHFDQUE0Qzs7SUFDNUMsOEJBQWdDOztJQUNoQyxnQ0FBdUI7O0lBQ3ZCLHFDQUFpRDs7SUFDakQsK0JBQTJDOztJQUMzQyxtQ0FBeUQ7Ozs7O0lBYXZELDRCQUFtQzs7Ozs7SUFDbkMsZ0NBQXNCOzs7OztJQUN0Qiw2QkFBOEI7Ozs7O0lBRTlCLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcySW50ZXJhY3Rpb25UeXBlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBhbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJQaWVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIGV4cG9ydEFzOiAnZzJQaWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItcGllXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWhhc10nOiAnaGFzTGVnZW5kJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWJsb2NrXSc6ICdibG9jaycsXG4gICAgJ1tjbGFzcy5nMi1waWVfX21pbmldJzogJ2lzUGVyY2VudCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbmltYXRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNMZWdlbmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BlcmNlbnQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG9vbHRpcDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZVdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jsb2NrTWF4V2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0OiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9jaGFydDogQ2hhcnQ7XG4gIHByaXZhdGUgcGVyY2VudENvbG9yOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBsZWdlbmREYXRhOiBOelNhZmVBbnlbXSA9IFtdO1xuICBpc1BlcmNlbnQ6IGJvb2xlYW47XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5uZXIgPSAwLjc1O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFsxMiwgMCwgMTIsIDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGluZVdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYmxvY2tNYXhXaWR0aCA9IDM4MDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0OiAoeTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUGllRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yczogYW55W107XG4gIEBJbnB1dCgpIGludGVyYWN0aW9uOiBHMkludGVyYWN0aW9uVHlwZSA9ICdub25lJztcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlBpZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGJsb2NrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc0xlZ2VuZCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gdGhpcy5ibG9ja01heFdpZHRoO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4RGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yIH0gPSB0aGlzO1xuICAgIHRoaXMuaXNQZXJjZW50ID0gcGVyY2VudCAhPSBudWxsO1xuICAgIGlmICh0aGlzLmlzUGVyY2VudCkge1xuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuICAgICAgdGhpcy5wZXJjZW50Q29sb3IgPSAodmFsdWU6IHN0cmluZykgPT4gKHZhbHVlID09PSAn5Y2g5q+UJyA/IGNvbG9yIHx8ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknIDogJyNGMEYyRjUnKTtcbiAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfljaDmr5QnLFxuICAgICAgICAgIHk6IHBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y+N5q+UJyxcbiAgICAgICAgICB5OiAxMDAgLSBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHRvb2x0aXAsIGlubmVyLCBoYXNMZWdlbmQsIGludGVyYWN0aW9uLCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuXG4gICAgaWYgKCF0b29sdGlwKSB7XG4gICAgICBjaGFydC50b29sdGlwKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICAgIHNob3dNYXJrZXJzOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaW50ZXJhY3Rpb24gIT09ICdub25lJykge1xuICAgICAgY2hhcnQuaW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgIH1cbiAgICBjaGFydC5heGlzKGZhbHNlKS5sZWdlbmQoZmFsc2UpLmNvb3JkaW5hdGUoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogaW5uZXIgfSk7XG4gICAgY2hhcnQuZmlsdGVyKCd4JywgKF92YWw6IGFueSwgaXRlbTogYW55KSA9PiBpdGVtLmNoZWNrZWQgIT09IGZhbHNlKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5hZGp1c3QoJ3N0YWNrJylcbiAgICAgIC5wb3NpdGlvbigneScpXG4gICAgICAudG9vbHRpcCgneCpwZXJjZW50JywgKG5hbWU6IHN0cmluZywgcDogbnVtYmVyKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZTogYCR7aGFzTGVnZW5kID8gcCA6IChwICogMTAwKS50b0ZpeGVkKDIpfSAlYCxcbiAgICAgIH0pKVxuICAgICAgLnN0YXRlKHt9KTtcblxuICAgIGNoYXJ0Lm9uKGBpbnRlcnZhbDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBhbmltYXRlLCBkYXRhLCBsaW5lV2lkdGgsIGlzUGVyY2VudCwgcGVyY2VudENvbG9yLCBjb2xvcnMgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQpIHJldHVybjtcblxuICAgIF9jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgIF9jaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuICAgIF9jaGFydC5nZW9tZXRyaWVzWzBdLnN0eWxlKHsgbGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KS5jb2xvcigneCcsIGlzUGVyY2VudCA/IHBlcmNlbnRDb2xvciA6IGNvbG9ycyk7XG4gICAgX2NoYXJ0LnNjYWxlKHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIOi9rOWMliBwZXJjZW50XG4gICAgY29uc3QgdG90YWxTdW0gPSBkYXRhLnJlZHVjZSgoY3VyLCBpdGVtKSA9PiBjdXIgKyBpdGVtLnksIDApO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICBpdGVtLnBlcmNlbnQgPSB0b3RhbFN1bSA9PT0gMCA/IDAgOiBpdGVtLnkgLyB0b3RhbFN1bTtcbiAgICB9XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgaXNQZXJjZW50LCBjZHIsIF9jaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCB8fCBpc1BlcmNlbnQpIHJldHVybjtcblxuICAgIHRoaXMubGVnZW5kRGF0YSA9IF9jaGFydC5nZW9tZXRyaWVzWzBdLmRhdGFBcnJheS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcbiAgICAgIG9yaWdpbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIG9yaWdpbi5wZXJjZW50ID0gKG9yaWdpbi5wZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICB9KTtcblxuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBsZWdlbmREYXRhLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgbGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIWxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcbiAgICBfY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2NoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=