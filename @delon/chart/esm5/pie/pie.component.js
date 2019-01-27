/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
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
var G2PieComponent = /** @class */ (function () {
    // #endregion
    function G2PieComponent(el, rend, ngZone, cdr) {
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
     * @return {?}
     */
    G2PieComponent.prototype.setCls = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, rend = _a.rend, hasLegend = _a.hasLegend, isPercent = _a.isPercent;
        /** @type {?} */
        var ne = (/** @type {?} */ (el.nativeElement));
        updateHostClass(ne, rend, {
            'g2-pie': true,
            'g2-pie__legend-has': hasLegend,
            'g2-pie__legend-block': hasLegend && ne.clientWidth <= 380,
            'g2-pie__mini': isPercent,
        }, true);
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.fixData = /**
     * @return {?}
     */
    function () {
        var _a = this, percent = _a.percent, color = _a.color;
        this.isPercent = percent != null;
        if (this.isPercent) {
            this.select = false;
            this.tooltip = false;
            this.percentColor = function (value) {
                return value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
            };
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
     * @return {?}
     */
    G2PieComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        this.setCls();
        var _a = this, node = _a.node, height = _a.height, padding = _a.padding, animate = _a.animate, tooltip = _a.tooltip, inner = _a.inner, hasLegend = _a.hasLegend;
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
            animate: animate,
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
        chart.filter('x', function (val, item) { return item.checked !== false; });
        chart
            .intervalStack()
            .position('y')
            .tooltip('x*percent', function (name, p) { return ({
            name: name,
            // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
            value: hasLegend ? p : (p * 100).toFixed(2),
        }); })
            .select(this.select);
        chart.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, animate = _a.animate, data = _a.data, lineWidth = _a.lineWidth, isPercent = _a.isPercent, percentColor = _a.percentColor, colors = _a.colors;
        if (!chart)
            return;
        chart.set('height', height);
        chart.set('padding', padding);
        chart.set('animate', animate);
        chart
            .get('geoms')[0]
            .style({ lineWidth: lineWidth, stroke: '#fff' })
            .color('x', isPercent ? percentColor : colors);
        /** @type {?} */
        var dv = new DataSet.DataView();
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
            y: {
                min: 0,
            },
        });
        chart.repaint();
        this.ngZone.run(function () { return _this.genLegend(); });
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.genLegend = /**
     * @return {?}
     */
    function () {
        var _a = this, hasLegend = _a.hasLegend, isPercent = _a.isPercent, cdr = _a.cdr, chart = _a.chart;
        if (!hasLegend || isPercent)
            return;
        this.legendData = chart
            .get('geoms')[0]
            .get('dataArray')
            .map(function (item) {
            /** @type {?} */
            var origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        });
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
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$ || !this.hasLegend)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(function () { return _this.setCls(); });
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
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
        this.setCls();
        this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
        this.installResizeEvent();
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular(function () { return _this.chart.destroy(); });
        }
    };
    G2PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-pie',
                    template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\"\n       class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\"\n        class=\"g2-pie__total-title\">\n      <ng-container *stringTemplateOutlet=\"subTitle\">\n        <div [innerHTML]=\"subTitle\"></div>\n      </ng-container>\n    </h4>\n    <div *ngIf=\"total\"\n         class=\"g2-pie__total-stat\">\n      <ng-container *stringTemplateOutlet=\"total\">\n        <div [innerHTML]=\"total\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\"\n    class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\"\n      (click)=\"_click(index)\"\n      class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\"\n          [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\"\n          [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2PieComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
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
    return G2PieComponent;
}());
export { G2PieComponent };
if (false) {
    /** @type {?} */
    G2PieComponent.prototype.resize$;
    /** @type {?} */
    G2PieComponent.prototype.node;
    /** @type {?} */
    G2PieComponent.prototype.chart;
    /** @type {?} */
    G2PieComponent.prototype.isPercent;
    /** @type {?} */
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
    /** @type {?} */
    G2PieComponent.prototype.el;
    /** @type {?} */
    G2PieComponent.prototype.rend;
    /** @type {?} */
    G2PieComponent.prototype.ngZone;
    /** @type {?} */
    G2PieComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEVBRVQsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLOUMsK0JBSUM7OztJQUhDLHNCQUFPOztJQUNQLHNCQUFVOzs7QUFJWjtJQWdDRSxhQUFhO0lBRWIsd0JBQ1UsRUFBYyxFQUNkLElBQWUsRUFDZixNQUFjLEVBQ2QsR0FBc0I7UUFIdEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFNBQUksR0FBSixJQUFJLENBQVc7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEzQmhDLGVBQVUsR0FBVSxFQUFFLENBQUM7O1FBSUMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBR3BCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFD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QUMzQixzQ0FBMEI7O0lBQzFCLG9DQUF1Qjs7SUFJdkIsK0JBQWtDOztJQUNsQyxpQ0FBd0M7O0lBQ3hDLCtCQUE0Qzs7SUFDNUMsa0NBQThDOztJQUM5QywrQkFBMkM7O0lBQzNDLGdDQUFtQzs7SUFDbkMsbUNBQTJDOztJQUMzQywrQkFBc0I7O0lBQ3RCLGlDQUE0Qzs7SUFDNUMsaUNBQXdDOztJQUN4QyxpQ0FBd0M7O0lBQ3hDLG1DQUFzQzs7SUFDdEMsZ0NBQXVDOztJQUN2QyxxQ0FBNEM7O0lBQzVDLDhCQUFnQzs7SUFDaEMsZ0NBQXVCOztJQUtyQiw0QkFBc0I7O0lBQ3RCLDhCQUF1Qjs7SUFDdkIsZ0NBQXNCOztJQUN0Qiw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBHMlBpZURhdGEge1xuICB4OiBhbnk7XG4gIHk6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1waWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBpc1BlcmNlbnQ6IGJvb2xlYW47XG4gIHByaXZhdGUgcGVyY2VudENvbG9yOiBhbnk7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0b3RhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNMZWdlbmQgPSBmYWxzZTtcbiAgQElucHV0KCkgaW5uZXIgPSAwLjc1O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXJbXSA9IFsxMiwgMCwgMTIsIDBdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGluZVdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIHZhbHVlRm9ybWF0OiAoeTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyUGllRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yczogYW55W107XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBwcml2YXRlIHNldENscygpIHtcbiAgICBjb25zdCB7IGVsLCByZW5kLCBoYXNMZWdlbmQsIGlzUGVyY2VudCB9ID0gdGhpcztcbiAgICBjb25zdCBuZSA9IGVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdXBkYXRlSG9zdENsYXNzKFxuICAgICAgbmUsXG4gICAgICByZW5kLFxuICAgICAge1xuICAgICAgICAnZzItcGllJzogdHJ1ZSxcbiAgICAgICAgJ2cyLXBpZV9fbGVnZW5kLWhhcyc6IGhhc0xlZ2VuZCxcbiAgICAgICAgJ2cyLXBpZV9fbGVnZW5kLWJsb2NrJzogaGFzTGVnZW5kICYmIG5lLmNsaWVudFdpZHRoIDw9IDM4MCxcbiAgICAgICAgJ2cyLXBpZV9fbWluaSc6IGlzUGVyY2VudCxcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZpeERhdGEoKSB7XG4gICAgY29uc3QgeyBwZXJjZW50LCBjb2xvciB9ID0gdGhpcztcbiAgICB0aGlzLmlzUGVyY2VudCA9IHBlcmNlbnQgIT0gbnVsbDtcbiAgICBpZiAodGhpcy5pc1BlcmNlbnQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcbiAgICAgIHRoaXMucGVyY2VudENvbG9yID0gdmFsdWUgPT5cbiAgICAgICAgdmFsdWUgPT09ICfljaDmr5QnID8gY29sb3IgfHwgJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KScgOiAnI0YwRjJGNSc7XG4gICAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y2g5q+UJyxcbiAgICAgICAgICB5OiBwZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WPjeavlCcsXG4gICAgICAgICAgeTogMTAwIC0gcGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMuc2V0Q2xzKCk7XG5cbiAgICBjb25zdCB7IG5vZGUsIGhlaWdodCwgcGFkZGluZywgYW5pbWF0ZSwgdG9vbHRpcCwgaW5uZXIsIGhhc0xlZ2VuZCB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgYW5pbWF0ZSxcbiAgICB9KSk7XG5cbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgaXRlbVRwbDpcbiAgICAgICAgICAnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7Y29sb3J9O1wiIGNsYXNzPVwiZzItdG9vbHRpcC1tYXJrZXJcIj48L3NwYW4+e25hbWV9OiB7dmFsdWV9ICU8L2xpPicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuXG4gICAgY2hhcnQuY29vcmQoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogaW5uZXIgfSk7XG5cbiAgICBjaGFydC5maWx0ZXIoJ3gnLCAodmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkICE9PSBmYWxzZSk7XG5cbiAgICBjaGFydFxuICAgICAgLmludGVydmFsU3RhY2soKVxuICAgICAgLnBvc2l0aW9uKCd5JylcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAobmFtZSwgcCkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8g55Sx5LqOIGhhc0xlZ2VuZCDkvJrkvJjlhYjlpITnkIbkuLrnmb7liIbmr5TmoLzlvI/vvIzlm6DmraTml6DpnIDopoHlnKggdG9vbHRpcCDkuK3ph43mlrDovazmjaJcbiAgICAgICAgdmFsdWU6IGhhc0xlZ2VuZCA/IHAgOiAocCAqIDEwMCkudG9GaXhlZCgyKSxcbiAgICAgIH0pKVxuICAgICAgLnNlbGVjdCh0aGlzLnNlbGVjdCk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhcnQsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgYW5pbWF0ZSxcbiAgICAgIGRhdGEsXG4gICAgICBsaW5lV2lkdGgsXG4gICAgICBpc1BlcmNlbnQsXG4gICAgICBwZXJjZW50Q29sb3IsXG4gICAgICBjb2xvcnMsXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCkgcmV0dXJuO1xuXG4gICAgY2hhcnQuc2V0KCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuICAgIGNoYXJ0LnNldCgnYW5pbWF0ZScsIGFuaW1hdGUpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5nZXQoJ2dlb21zJylbMF1cbiAgICAgIC5zdHlsZSh7IGxpbmVXaWR0aCwgc3Ryb2tlOiAnI2ZmZicgfSlcbiAgICAgIC5jb2xvcigneCcsIGlzUGVyY2VudCA/IHBlcmNlbnRDb2xvciA6IGNvbG9ycyk7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LkRhdGFWaWV3KCk7XG4gICAgZHYuc291cmNlKGRhdGEpLnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAncGVyY2VudCcsXG4gICAgICBmaWVsZDogJ3knLFxuICAgICAgZGltZW5zaW9uOiAneCcsXG4gICAgICBhczogJ3BlcmNlbnQnLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZShkdiwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQucmVwYWludCgpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZ2VuTGVnZW5kKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5MZWdlbmQoKSB7XG4gICAgY29uc3QgeyBoYXNMZWdlbmQsIGlzUGVyY2VudCwgY2RyLCBjaGFydCB9ID0gdGhpcztcbiAgICBpZiAoIWhhc0xlZ2VuZCB8fCBpc1BlcmNlbnQpIHJldHVybjtcblxuICAgIHRoaXMubGVnZW5kRGF0YSA9IGNoYXJ0XG4gICAgICAuZ2V0KCdnZW9tcycpWzBdXG4gICAgICAuZ2V0KCdkYXRhQXJyYXknKVxuICAgICAgLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcbiAgICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgIH0pO1xuXG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGxlZ2VuZERhdGEsIGNoYXJ0IH0gPSB0aGlzO1xuICAgIGxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICFsZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG4gICAgY2hhcnQucmVwYWludCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplJCB8fCAhdGhpcy5oYXNMZWdlbmQpIHJldHVybjtcblxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q2xzKCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5maXhEYXRhKCk7XG4gICAgdGhpcy5zZXRDbHMoKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==