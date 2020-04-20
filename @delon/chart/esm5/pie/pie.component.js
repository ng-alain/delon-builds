/**
 * @fileoverview added by tsickle
 * Generated from: pie.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __values } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
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
    function G2PieComponent(el, ngZone, cdr) {
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
        var _a = this, node = _a.node, height = _a.height, padding = _a.padding, tooltip = _a.tooltip, inner = _a.inner, hasLegend = _a.hasLegend, interaction = _a.interaction;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height: height,
            padding: padding,
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
        { type: ChangeDetectorRef }
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
        interaction: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFLTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFakMsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHeEQsK0JBSUM7OztJQUhDLHNCQUFPOztJQUNQLHNCQUFVOzs7QUFJWjtJQWdERSx3QkFBbUIsRUFBMkIsRUFBVSxNQUFjLEVBQVUsR0FBc0I7UUFBbkYsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE3QnRHLGVBQVUsR0FBZ0IsRUFBRSxDQUFDOztRQUlMLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLFVBQUssR0FBRywwQkFBMEIsQ0FBQztRQUdwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUErQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJDLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFOUIsU0FBSSxHQUFnQixFQUFFLENBQUM7UUFFdkIs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RSw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBJbnRlcmFjdGlvblR5cGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBhbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1waWUnLFxuICBleHBvcnRBczogJ2cyUGllJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmcyLXBpZV0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5nMi1waWVfX2xlZ2VuZC1oYXNdJzogJ2hhc0xlZ2VuZCcsXG4gICAgJ1tjbGFzcy5nMi1waWVfX2xlZ2VuZC1ibG9ja10nOiAnYmxvY2snLFxuICAgICdbY2xhc3MuZzItcGllX19taW5pXSc6ICdpc1BlcmNlbnQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG4gIHByaXZhdGUgaXNQZXJjZW50OiBib29sZWFuO1xuICBwcml2YXRlIHBlcmNlbnRDb2xvcjogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZztcbiAgbGVnZW5kRGF0YTogTnpTYWZlQW55W10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbm5lciA9IDAuNzU7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEyLCAwLCAxMiwgMF07XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRvb2x0aXAgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsaW5lV2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBibG9ja01heFdpZHRoID0gMzgwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgdmFsdWVGb3JtYXQ6ICh5OiBudW1iZXIpID0+IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogRzJQaWVEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgY29sb3JzOiBhbnlbXTtcbiAgQElucHV0KCkgaW50ZXJhY3Rpb246IEludGVyYWN0aW9uVHlwZSA9ICdub25lJztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0xlZ2VuZCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gdGhpcy5ibG9ja01heFdpZHRoO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByaXZhdGUgZml4RGF0YSgpIHtcbiAgICBjb25zdCB7IHBlcmNlbnQsIGNvbG9yIH0gPSB0aGlzO1xuICAgIHRoaXMuaXNQZXJjZW50ID0gcGVyY2VudCAhPSBudWxsO1xuICAgIGlmICh0aGlzLmlzUGVyY2VudCkge1xuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuICAgICAgdGhpcy5wZXJjZW50Q29sb3IgPSAodmFsdWU6IHN0cmluZykgPT4gKHZhbHVlID09PSAn5Y2g5q+UJyA/IGNvbG9yIHx8ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknIDogJyNGMEYyRjUnKTtcbiAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfljaDmr5QnLFxuICAgICAgICAgIHk6IHBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y+N5q+UJyxcbiAgICAgICAgICB5OiAxMDAgLSBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBoZWlnaHQsIHBhZGRpbmcsIHRvb2x0aXAsIGlubmVyLCBoYXNMZWdlbmQsIGludGVyYWN0aW9uIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgc2hvd01hcmtlcnM6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbnRlcmFjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICBjaGFydC5pbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIGNoYXJ0LmF4aXMoZmFsc2UpLmxlZ2VuZChmYWxzZSkuY29vcmRpbmF0ZSgndGhldGEnLCB7IGlubmVyUmFkaXVzOiBpbm5lciB9KTtcbiAgICBjaGFydC5maWx0ZXIoJ3gnLCAoX3ZhbDogYW55LCBpdGVtOiBhbnkpID0+IGl0ZW0uY2hlY2tlZCAhPT0gZmFsc2UpO1xuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWwoKVxuICAgICAgLmFkanVzdCgnc3RhY2snKVxuICAgICAgLnBvc2l0aW9uKCd5JylcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAobmFtZTogc3RyaW5nLCBwOiBudW1iZXIpID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHZhbHVlOiBgJHtoYXNMZWdlbmQgPyBwIDogKHAgKiAxMDApLnRvRml4ZWQoMil9ICVgLFxuICAgICAgfSkpXG4gICAgICAuc3RhdGUoe30pO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBoZWlnaHQsIHBhZGRpbmcsIGFuaW1hdGUsIGRhdGEsIGxpbmVXaWR0aCwgaXNQZXJjZW50LCBwZXJjZW50Q29sb3IsIGNvbG9ycyB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0KSByZXR1cm47XG5cbiAgICBjaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgY2hhcnQuYW5pbWF0ZShhbmltYXRlKTtcbiAgICBjaGFydC5nZW9tZXRyaWVzWzBdLnN0eWxlKHsgbGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KS5jb2xvcigneCcsIGlzUGVyY2VudCA/IHBlcmNlbnRDb2xvciA6IGNvbG9ycyk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8g6L2s5YyWIHBlcmNlbnRcbiAgICBjb25zdCB0b3RhbFN1bSA9IGRhdGEucmVkdWNlKChjdXIsIGl0ZW0pID0+IGN1ciArIGl0ZW0ueSwgMCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgIGl0ZW0ucGVyY2VudCA9IHRvdGFsU3VtID09PSAwID8gMCA6IGl0ZW0ueSAvIHRvdGFsU3VtO1xuICAgIH1cbiAgICBjaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZ2VuTGVnZW5kKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MZWdlbmQoKSB7XG4gICAgY29uc3QgeyBoYXNMZWdlbmQsIGlzUGVyY2VudCwgY2RyLCBjaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCB8fCBpc1BlcmNlbnQpIHJldHVybjtcblxuICAgIHRoaXMubGVnZW5kRGF0YSA9IGNoYXJ0Lmdlb21ldHJpZXNbMF0uZGF0YUFycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICBvcmlnaW4uY29sb3IgPSBpdGVtWzBdLmNvbG9yO1xuICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgb3JpZ2luLnBlcmNlbnQgPSAob3JpZ2luLnBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICByZXR1cm4gb3JpZ2luO1xuICAgIH0pO1xuXG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZpeERhdGEoKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==