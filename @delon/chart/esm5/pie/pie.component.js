/**
 * @fileoverview added by tsickle
 * Generated from: pie.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __values } from "tslib";
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
var G2PieComponent = /** @class */ (function () {
    function G2PieComponent(el, ngZone, cdr, configSrv) {
        this.el = el;
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
        this.blockMaxWidth = 380;
        this.select = true;
        this.data = [];
        this.interaction = 'none';
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    Object.defineProperty(G2PieComponent.prototype, "block", {
        // #endregion
        get: 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            return this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
        },
        enumerable: true,
        configurable: true
    });
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
            function (value) { return (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5'); });
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
        var _this = this;
        var _a = this, node = _a.node, height = _a.height, padding = _a.padding, tooltip = _a.tooltip, inner = _a.inner, hasLegend = _a.hasLegend, interaction = _a.interaction, theme = _a.theme;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height: height,
            padding: padding,
            theme: theme,
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
        function (_val, item) { return item.checked !== false; }));
        chart
            .interval()
            .adjust('stack')
            .position('y')
            .tooltip('x*percent', (/**
         * @param {?} name
         * @param {?} p
         * @return {?}
         */
        function (name, p) { return ({
            name: name,
            value: (hasLegend ? p : (p * 100).toFixed(2)) + " %",
        }); }))
            .state({});
        chart.on("interval:click", (/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () { var _a; return _this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev: ev }); }));
        }));
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
        var e_1, _a;
        var _this = this;
        var _b = this, chart = _b.chart, height = _b.height, padding = _b.padding, animate = _b.animate, data = _b.data, lineWidth = _b.lineWidth, isPercent = _b.isPercent, percentColor = _b.percentColor, colors = _b.colors;
        if (!chart)
            return;
        chart.height = height;
        chart.padding = padding;
        chart.animate(animate);
        chart.geometries[0].style({ lineWidth: lineWidth, stroke: '#fff' }).color('x', isPercent ? percentColor : colors);
        chart.scale({
            x: {
                type: 'cat',
                range: [0, 1],
            },
        });
        // 转化 percent
        /** @type {?} */
        var totalSum = data.reduce((/**
         * @param {?} cur
         * @param {?} item
         * @return {?}
         */
        function (cur, item) { return cur + item.y; }), 0);
        try {
            for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var item = data_1_1.value;
                item.percent = totalSum === 0 ? 0 : item.y / totalSum;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        chart.changeData(data);
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
        this.legendData = chart.geometries[0].dataArray.map((/**
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
        chart.render();
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
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnDestroy = /**
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
    G2PieComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: AlainConfigService }
    ]; };
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
    return G2PieComponent;
}());
export { G2PieComponent };
if (false) {
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
    /** @type {?} */
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHNUUsK0JBSUM7OztJQUhDLHNCQUFPOztJQUNQLHNCQUFVOzs7Ozs7QUFJWixvQ0FHQzs7O0lBRkMsOEJBQWdCOztJQUNoQiw0QkFBVTs7QUFHWjtJQWtERSx3QkFBbUIsRUFBMkIsRUFBVSxNQUFjLEVBQVUsR0FBc0IsRUFBRSxTQUE2QjtRQUFsSCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDdEcsZUFBVSxHQUFnQixFQUFFLENBQUM7O1FBS0wsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBR3BCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixZQUFPLEdBQStCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFD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QjtRQUFkLFdBQVcsRUFBRTs7cURBQWU7SUFDZDtRQUFkLFdBQVcsRUFBRTs7eURBQXFCO0lBQ25CO1FBQWYsWUFBWSxFQUFFOztrREFBZTtJQXlJekMscUJBQUM7Q0FBQSxBQTdLRCxJQTZLQztTQS9KWSxjQUFjOzs7Ozs7SUFDekIsOEJBQW1FOzs7OztJQUNuRSwrQkFBcUI7Ozs7O0lBQ3JCLHNDQUFnRDs7SUFDaEQsb0NBQTZCOztJQUM3QixtQ0FBbUI7O0lBSW5CLCtCQUFrQzs7SUFDbEMsaUNBQXdDOztJQUN4QywrQkFBNEM7O0lBQzVDLGtDQUE4Qzs7SUFDOUMsK0JBQTJDOztJQUMzQyxnQ0FBbUM7O0lBQ25DLG1DQUEyQzs7SUFDM0MsK0JBQXNCOztJQUN0QixpQ0FBOEQ7O0lBQzlELGlDQUF3Qzs7SUFDeEMsaUNBQXdDOztJQUN4QyxtQ0FBc0M7O0lBQ3RDLHVDQUE0Qzs7SUFDNUMsZ0NBQXVDOztJQUN2QyxxQ0FBNEM7O0lBQzVDLDhCQUFnQzs7SUFDaEMsZ0NBQXVCOztJQUN2QixxQ0FBaUQ7O0lBQ2pELCtCQUEyQzs7SUFDM0MsbUNBQXlEOztJQVE3Qyw0QkFBa0M7Ozs7O0lBQUUsZ0NBQXNCOzs7OztJQUFFLDZCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEcySW50ZXJhY3Rpb25UeXBlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBhbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJQaWVEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIGV4cG9ydEFzOiAnZzJQaWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItcGllXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWhhc10nOiAnaGFzTGVnZW5kJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWJsb2NrXSc6ICdibG9jaycsXG4gICAgJ1tjbGFzcy5nMi1waWVfX21pbmldJzogJ2lzUGVyY2VudCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcbiAgcHJpdmF0ZSBwZXJjZW50Q29sb3I6ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIGxlZ2VuZERhdGE6IE56U2FmZUFueVtdID0gW107XG4gIGlzUGVyY2VudDogYm9vbGVhbjtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbm5lciA9IDAuNzU7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEyLCAwLCAxMiwgMF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsaW5lV2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBibG9ja01heFdpZHRoID0gMzgwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXQ6ICh5OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogRzJQaWVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcbiAgQElucHV0KCkgaW50ZXJhY3Rpb246IEcySW50ZXJhY3Rpb25UeXBlID0gJ25vbmUnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyUGllQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgYmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzTGVnZW5kICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA8PSB0aGlzLmJsb2NrTWF4V2lkdGg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4RGF0YSgpIHtcbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yIH0gPSB0aGlzO1xuICAgIHRoaXMuaXNQZXJjZW50ID0gcGVyY2VudCAhPSBudWxsO1xuICAgIGlmICh0aGlzLmlzUGVyY2VudCkge1xuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuICAgICAgdGhpcy5wZXJjZW50Q29sb3IgPSAodmFsdWU6IHN0cmluZykgPT4gKHZhbHVlID09PSAn5Y2g5q+UJyA/IGNvbG9yIHx8ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknIDogJyNGMEYyRjUnKTtcbiAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfljaDmr5QnLFxuICAgICAgICAgIHk6IHBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y+N5q+UJyxcbiAgICAgICAgICB5OiAxMDAgLSBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHRvb2x0aXAsIGlubmVyLCBoYXNMZWdlbmQsIGludGVyYWN0aW9uLCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgc2hvd01hcmtlcnM6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbnRlcmFjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICBjaGFydC5pbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIGNoYXJ0LmF4aXMoZmFsc2UpLmxlZ2VuZChmYWxzZSkuY29vcmRpbmF0ZSgndGhldGEnLCB7IGlubmVyUmFkaXVzOiBpbm5lciB9KTtcbiAgICBjaGFydC5maWx0ZXIoJ3gnLCAoX3ZhbDogYW55LCBpdGVtOiBhbnkpID0+IGl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLmFkanVzdCgnc3RhY2snKVxuICAgICAgLnBvc2l0aW9uKCd5JylcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAobmFtZTogc3RyaW5nLCBwOiBudW1iZXIpID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlOiBgJHtoYXNMZWdlbmQgPyBwIDogKHAgKiAxMDApLnRvRml4ZWQoMil9ICVgLFxuICAgICAgfSkpXG4gICAgICAuc3RhdGUoe30pO1xuXG4gICAgY2hhcnQub24oYGludGVydmFsOmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgYW5pbWF0ZSwgZGF0YSwgbGluZVdpZHRoLCBpc1BlcmNlbnQsIHBlcmNlbnRDb2xvciwgY29sb3JzIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybjtcblxuICAgIGNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBjaGFydC5wYWRkaW5nID0gcGFkZGluZztcbiAgICBjaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuICAgIGNoYXJ0Lmdlb21ldHJpZXNbMF0uc3R5bGUoeyBsaW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gcGVyY2VudENvbG9yIDogY29sb3JzKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyDovazljJYgcGVyY2VudFxuICAgIGNvbnN0IHRvdGFsU3VtID0gZGF0YS5yZWR1Y2UoKGN1ciwgaXRlbSkgPT4gY3VyICsgaXRlbS55LCAwKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgaXRlbS5wZXJjZW50ID0gdG90YWxTdW0gPT09IDAgPyAwIDogaXRlbS55IC8gdG90YWxTdW07XG4gICAgfVxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgaXNQZXJjZW50LCBjZHIsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGlmICghaGFzTGVnZW5kIHx8IGlzUGVyY2VudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnQuZ2VvbWV0cmllc1swXS5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgIHJldHVybiBvcmlnaW47XG4gICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcikge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgY2hhcnQgfSA9IHRoaXM7XG4gICAgbGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIWxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19