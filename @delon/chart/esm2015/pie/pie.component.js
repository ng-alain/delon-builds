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
        _chart.render();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2NoYXJ0L3BpZS8iLCJzb3VyY2VzIjpbInBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sYUFBYSxDQUFDOzs7O0FBR3ZHLCtCQUlDOzs7SUFIQyxzQkFBTzs7SUFDUCxzQkFBVTs7Ozs7O0FBSVosb0NBR0M7OztJQUZDLDhCQUFnQjs7SUFDaEIsNEJBQVU7O0FBaUJaLE1BQU0sT0FBTyxjQUFjOzs7Ozs7OztJQWtEekIsWUFDVSxFQUEyQixFQUMzQixNQUFjLEVBQ2QsR0FBc0IsRUFDOUIsU0FBNkIsRUFDckIsUUFBa0I7UUFKbEIsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRXRCLGFBQVEsR0FBUixRQUFRLENBQVU7UUF6QzVCLGVBQVUsR0FBZ0IsRUFBRSxDQUFDOztRQUtMLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFVBQUssR0FBRywwQkFBMEIsQ0FBQztRQUdwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFB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QUU7OytDQUFnQjtBQUNoQjtJQUFkLFdBQVcsRUFBRTs7aURBQWU7QUFDZDtJQUFkLFdBQVcsRUFBRTs7cURBQXFCO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzs4Q0FBZTs7O0lBL0J2Qyx1Q0FBNEM7O0lBQzVDLHdDQUE2Qzs7SUFDN0MseUNBQStDOztJQUMvQywyQ0FBaUQ7O0lBQ2pELHlDQUE4Qzs7SUFDOUMseUNBQStDOztJQUMvQywyQ0FBZ0Q7O0lBQ2hELCtDQUFvRDs7SUFDcEQsd0NBQThDOzs7OztJQUU5Qyw4QkFBbUU7Ozs7O0lBQ25FLGdDQUFzQjs7Ozs7SUFDdEIsc0NBQWdEOztJQUNoRCxvQ0FBNkI7O0lBQzdCLG1DQUFtQjs7SUFJbkIsK0JBQWtDOztJQUNsQyxpQ0FBd0M7O0lBQ3hDLCtCQUE0Qzs7SUFDNUMsa0NBQThDOztJQUM5QywrQkFBMkM7O0lBQzNDLGdDQUFtQzs7SUFDbkMsbUNBQTJDOztJQUMzQywrQkFBc0I7O0lBQ3RCLGlDQUE4RDs7SUFDOUQsaUNBQXdDOztJQUN4QyxpQ0FBd0M7O0lBQ3hDLG1DQUFzQzs7SUFDdEMsdUNBQTRDOztJQUM1QyxnQ0FBdUM7O0lBQ3ZDLHFDQUE0Qzs7SUFDNUMsOEJBQWdDOztJQUNoQyxnQ0FBdUI7O0lBQ3ZCLHFDQUFpRDs7SUFDakQsK0JBQTJDOztJQUMzQyxtQ0FBeUQ7Ozs7O0lBYXZELDRCQUFtQzs7Ozs7SUFDbkMsZ0NBQXNCOzs7OztJQUN0Qiw2QkFBOEI7Ozs7O0lBRTlCLGtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcySW50ZXJhY3Rpb25UeXBlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBhbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJQaWVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIGV4cG9ydEFzOiAnZzJQaWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItcGllXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWhhc10nOiAnaGFzTGVnZW5kJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWJsb2NrXSc6ICdibG9jaycsXG4gICAgJ1tjbGFzcy5nMi1waWVfX21pbmldJzogJ2lzUGVyY2VudCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbmltYXRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oYXNMZWdlbmQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BlcmNlbnQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG9vbHRpcDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZVdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jsb2NrTWF4V2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0OiBCb29sZWFuSW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIF9jaGFydDogQ2hhcnQ7XG4gIHByaXZhdGUgcGVyY2VudENvbG9yOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBsZWdlbmREYXRhOiBOelNhZmVBbnlbXSA9IFtdO1xuICBpc1BlcmNlbnQ6IGJvb2xlYW47XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5uZXIgPSAwLjc1O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFsxMiwgMCwgMTIsIDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGluZVdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYmxvY2tNYXhXaWR0aCA9IDM4MDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0OiAoeTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUGllRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yczogYW55W107XG4gIEBJbnB1dCgpIGludGVyYWN0aW9uOiBHMkludGVyYWN0aW9uVHlwZSA9ICdub25lJztcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlBpZUNsaWNrSXRlbT4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGJsb2NrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc0xlZ2VuZCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gdGhpcy5ibG9ja01heFdpZHRoO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4RGF0YSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yIH0gPSB0aGlzO1xuICAgIHRoaXMuaXNQZXJjZW50ID0gcGVyY2VudCAhPSBudWxsO1xuICAgIGlmICh0aGlzLmlzUGVyY2VudCkge1xuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuICAgICAgdGhpcy5wZXJjZW50Q29sb3IgPSAodmFsdWU6IHN0cmluZykgPT4gKHZhbHVlID09PSAn5Y2g5q+UJyA/IGNvbG9yIHx8ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknIDogJyNGMEYyRjUnKTtcbiAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfljaDmr5QnLFxuICAgICAgICAgIHk6IHBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y+N5q+UJyxcbiAgICAgICAgICB5OiAxMDAgLSBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHRvb2x0aXAsIGlubmVyLCBoYXNMZWdlbmQsIGludGVyYWN0aW9uLCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IG5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuXG4gICAgaWYgKCF0b29sdGlwKSB7XG4gICAgICBjaGFydC50b29sdGlwKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICAgIHNob3dNYXJrZXJzOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaW50ZXJhY3Rpb24gIT09ICdub25lJykge1xuICAgICAgY2hhcnQuaW50ZXJhY3Rpb24oaW50ZXJhY3Rpb24pO1xuICAgIH1cbiAgICBjaGFydC5heGlzKGZhbHNlKS5sZWdlbmQoZmFsc2UpLmNvb3JkaW5hdGUoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogaW5uZXIgfSk7XG4gICAgY2hhcnQuZmlsdGVyKCd4JywgKF92YWw6IGFueSwgaXRlbTogYW55KSA9PiBpdGVtLmNoZWNrZWQgIT09IGZhbHNlKTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5hZGp1c3QoJ3N0YWNrJylcbiAgICAgIC5wb3NpdGlvbigneScpXG4gICAgICAudG9vbHRpcCgneCpwZXJjZW50JywgKG5hbWU6IHN0cmluZywgcDogbnVtYmVyKSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZTogYCR7aGFzTGVnZW5kID8gcCA6IChwICogMTAwKS50b0ZpeGVkKDIpfSAlYCxcbiAgICAgIH0pKVxuICAgICAgLnN0YXRlKHt9KTtcblxuICAgIGNoYXJ0Lm9uKGBpbnRlcnZhbDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgaGVpZ2h0LCBwYWRkaW5nLCBhbmltYXRlLCBkYXRhLCBsaW5lV2lkdGgsIGlzUGVyY2VudCwgcGVyY2VudENvbG9yLCBjb2xvcnMgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQpIHJldHVybjtcblxuICAgIF9jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgIF9jaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuICAgIF9jaGFydC5nZW9tZXRyaWVzWzBdLnN0eWxlKHsgbGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KS5jb2xvcigneCcsIGlzUGVyY2VudCA/IHBlcmNlbnRDb2xvciA6IGNvbG9ycyk7XG4gICAgX2NoYXJ0LnNjYWxlKHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIOi9rOWMliBwZXJjZW50XG4gICAgY29uc3QgdG90YWxTdW0gPSBkYXRhLnJlZHVjZSgoY3VyLCBpdGVtKSA9PiBjdXIgKyBpdGVtLnksIDApO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICBpdGVtLnBlcmNlbnQgPSB0b3RhbFN1bSA9PT0gMCA/IDAgOiBpdGVtLnkgLyB0b3RhbFN1bTtcbiAgICB9XG4gICAgX2NoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZ2VuTGVnZW5kKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MZWdlbmQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBoYXNMZWdlbmQsIGlzUGVyY2VudCwgY2RyLCBfY2hhcnQgfSA9IHRoaXM7XG4gICAgaWYgKCFoYXNMZWdlbmQgfHwgaXNQZXJjZW50KSByZXR1cm47XG5cbiAgICB0aGlzLmxlZ2VuZERhdGEgPSBfY2hhcnQuZ2VvbWV0cmllc1swXS5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgIHJldHVybiBvcmlnaW47XG4gICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgX2NoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpeERhdGEoKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19