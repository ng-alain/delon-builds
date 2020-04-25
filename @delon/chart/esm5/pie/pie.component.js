/**
 * @fileoverview added by tsickle
 * Generated from: pie.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __values } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
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
                    template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\"\n       class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\"\n        class=\"g2-pie__total-title\">\n      <ng-container *nzStringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *nzStringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\"\n    class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
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
        theme: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFLTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHakMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBR3hELCtCQUlDOzs7SUFIQyxzQkFBTzs7SUFDUCxzQkFBVTs7O0FBSVo7SUFpREUsd0JBQW1CLEVBQTJCLEVBQVUsTUFBYyxFQUFVLEdBQXNCLEVBQUUsU0FBNkI7UUFBbEgsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE5QnRHLGVBQVUsR0FBZ0IsRUFBRSxDQUFDOztRQUlMLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFVBQUssR0FBRywwQkFBMEIsQ0FBQztRQUdwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUErQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ25C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O0lBQzlELGlDQUF3Qzs7SUFDeEMsaUNBQXdDOztJQUN4QyxtQ0FBc0M7O0lBQ3RDLHVDQUE0Qzs7SUFDNUMsZ0NBQXVDOztJQUN2QyxxQ0FBNEM7O0lBQzVDLDhCQUFnQzs7SUFDaEMsZ0NBQXVCOztJQUN2QixxQ0FBK0M7O0lBQy9DLCtCQUFxQzs7SUFRekIsNEJBQWtDOzs7OztJQUFFLGdDQUFzQjs7Ozs7SUFBRSw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBMb29zZU9iamVjdCB9IGZyb20gJ0BhbnR2L2cyL2xpYi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb25UeXBlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyUGllRGF0YSB7XG4gIHg6IGFueTtcbiAgeTogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIGV4cG9ydEFzOiAnZzJQaWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItcGllXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWhhc10nOiAnaGFzTGVnZW5kJyxcbiAgICAnW2NsYXNzLmcyLXBpZV9fbGVnZW5kLWJsb2NrXSc6ICdibG9jaycsXG4gICAgJ1tjbGFzcy5nMi1waWVfX21pbmldJzogJ2lzUGVyY2VudCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcbiAgcHJpdmF0ZSBpc1BlcmNlbnQ6IGJvb2xlYW47XG4gIHByaXZhdGUgcGVyY2VudENvbG9yOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xuICBsZWdlbmREYXRhOiBOelNhZmVBbnlbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYW5pbWF0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFzTGVnZW5kID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlubmVyID0gMC43NTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbMTIsIDAsIDEyLCAwXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdG9vbHRpcCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxpbmVXaWR0aCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGJsb2NrTWF4V2lkdGggPSAzODA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSB2YWx1ZUZvcm1hdDogKHk6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBHMlBpZURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xuICBASW5wdXQoKSBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlID0gJ25vbmUnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgTG9vc2VPYmplY3Q7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBibG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNMZWdlbmQgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIDw9IHRoaXMuYmxvY2tNYXhXaWR0aDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoS2V5KHRoaXMsICdjaGFydCcsICd0aGVtZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhEYXRhKCkge1xuICAgIGNvbnN0IHsgcGVyY2VudCwgY29sb3IgfSA9IHRoaXM7XG4gICAgdGhpcy5pc1BlcmNlbnQgPSBwZXJjZW50ICE9IG51bGw7XG4gICAgaWYgKHRoaXMuaXNQZXJjZW50KSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy50b29sdGlwID0gZmFsc2U7XG4gICAgICB0aGlzLnBlcmNlbnRDb2xvciA9ICh2YWx1ZTogc3RyaW5nKSA9PiAodmFsdWUgPT09ICfljaDmr5QnID8gY29sb3IgfHwgJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KScgOiAnI0YwRjJGNScpO1xuICAgICAgdGhpcy5kYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WNoOavlCcsXG4gICAgICAgICAgeTogcGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHg6ICflj43mr5QnLFxuICAgICAgICAgIHk6IDEwMCAtIHBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgdG9vbHRpcCwgaW5uZXIsIGhhc0xlZ2VuZCwgaW50ZXJhY3Rpb24sIHRoZW1lIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcblxuICAgIGlmICghdG9vbHRpcCkge1xuICAgICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgICBzaG93TWFya2VyczogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGludGVyYWN0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgIGNoYXJ0LmludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICB9XG4gICAgY2hhcnQuYXhpcyhmYWxzZSkubGVnZW5kKGZhbHNlKS5jb29yZGluYXRlKCd0aGV0YScsIHsgaW5uZXJSYWRpdXM6IGlubmVyIH0pO1xuICAgIGNoYXJ0LmZpbHRlcigneCcsIChfdmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkICE9PSBmYWxzZSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAuYWRqdXN0KCdzdGFjaycpXG4gICAgICAucG9zaXRpb24oJ3knKVxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChuYW1lOiBzdHJpbmcsIHA6IG51bWJlcikgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWU6IGAke2hhc0xlZ2VuZCA/IHAgOiAocCAqIDEwMCkudG9GaXhlZCgyKX0gJWAsXG4gICAgICB9KSlcbiAgICAgIC5zdGF0ZSh7fSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIGhlaWdodCwgcGFkZGluZywgYW5pbWF0ZSwgZGF0YSwgbGluZVdpZHRoLCBpc1BlcmNlbnQsIHBlcmNlbnRDb2xvciwgY29sb3JzIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybjtcblxuICAgIGNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICBjaGFydC5wYWRkaW5nID0gcGFkZGluZztcbiAgICBjaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuICAgIGNoYXJ0Lmdlb21ldHJpZXNbMF0uc3R5bGUoeyBsaW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gcGVyY2VudENvbG9yIDogY29sb3JzKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyDovazljJYgcGVyY2VudFxuICAgIGNvbnN0IHRvdGFsU3VtID0gZGF0YS5yZWR1Y2UoKGN1ciwgaXRlbSkgPT4gY3VyICsgaXRlbS55LCAwKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgaXRlbS5wZXJjZW50ID0gdG90YWxTdW0gPT09IDAgPyAwIDogaXRlbS55IC8gdG90YWxTdW07XG4gICAgfVxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5nZW5MZWdlbmQoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbkxlZ2VuZCgpIHtcbiAgICBjb25zdCB7IGhhc0xlZ2VuZCwgaXNQZXJjZW50LCBjZHIsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGlmICghaGFzTGVnZW5kIHx8IGlzUGVyY2VudCkgcmV0dXJuO1xuXG4gICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnQuZ2VvbWV0cmllc1swXS5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgIHJldHVybiBvcmlnaW47XG4gICAgfSk7XG5cbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcikge1xuICAgIGNvbnN0IHsgbGVnZW5kRGF0YSwgY2hhcnQgfSA9IHRoaXM7XG4gICAgbGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIWxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZml4RGF0YSgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19