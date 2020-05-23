/**
 * @fileoverview added by tsickle
 * Generated from: gauge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { Chart, registerShape } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
var G2GaugeComponent = /** @class */ (function () {
    // #endregion
    function G2GaugeComponent(el, ngZone, configSrv) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.padding = [10, 10, 30, 10];
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @private
     * @return {?}
     */
    G2GaugeComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        // 自定义Shape 部分
        registerShape('point', 'pointer', {
            draw: /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            function (cfg, container) {
                /** @type {?} */
                var group = container.addGroup({});
                // 获取极坐标系下画布中心点
                /** @type {?} */
                var center = ((/** @type {?} */ (this))).parsePoint({ x: 0, y: 0 });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 2.5,
                        lineCap: 'round',
                    },
                });
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 5.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff',
                    },
                });
                return group;
            },
        });
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, format = _a.format, theme = _a.theme;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: true,
            height: height,
            padding: padding,
            theme: theme,
        }));
        chart.legend(false);
        chart.animate(false);
        chart.tooltip(false);
        chart.coordinate('polar', {
            startAngle: (-9 / 8) * Math.PI,
            endAngle: (1 / 8) * Math.PI,
            radius: 0.75,
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6,
        });
        chart.axis('1', false);
        chart.axis('value', {
            line: null,
            label: {
                offset: -12,
                formatter: format,
            },
            tickLine: null,
            grid: null,
        });
        chart.point().position('value*1').shape('pointer');
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2GaugeComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, percent = _a.percent, color = _a.color, bgColor = _a.bgColor, title = _a.title;
        if (!chart)
            return;
        /** @type {?} */
        var data = [{ name: title, value: percent }];
        /** @type {?} */
        var val = data[0].value;
        chart.annotation().clear(true);
        if (color) {
            chart.geometries[0].color(color);
        }
        // 绘制仪表盘背景
        chart.annotation().arc({
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                stroke: bgColor,
                lineWidth: 12,
                lineDash: null,
            },
        });
        chart.annotation().arc({
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
                lineDash: null,
            },
        });
        // 绘制指标数字
        chart.annotation().text({
            position: ['50%', '85%'],
            content: title,
            style: {
                fontSize: 12,
                fill: 'rgba(0, 0, 0, 0.43)',
                textAlign: 'center',
            },
        });
        chart.annotation().text({
            position: ['50%', '90%'],
            content: val + " %",
            style: {
                fontSize: 24,
                fill: 'rgba(0, 0, 0, 0.85)',
                textAlign: 'center',
            },
            offsetY: 15,
        });
        chart.changeData(data);
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnInit = /**
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
    G2GaugeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnDestroy = /**
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
    G2GaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-gauge',
                    exportAs: 'g2Gauge',
                    template: "",
                    host: {
                        '[class.g2-gauge]': 'true',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2GaugeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: AlainConfigService }
    ]; };
    G2GaugeComponent.propDecorators = {
        delay: [{ type: Input }],
        title: [{ type: Input }],
        height: [{ type: Input }],
        color: [{ type: Input }],
        bgColor: [{ type: Input }],
        format: [{ type: Input }],
        percent: [{ type: Input }],
        padding: [{ type: Input }],
        theme: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2GaugeComponent.prototype, "delay", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2GaugeComponent.prototype, "height", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2GaugeComponent.prototype, "percent", void 0);
    return G2GaugeComponent;
}());
export { G2GaugeComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2GaugeComponent.prototype.chart;
    /** @type {?} */
    G2GaugeComponent.prototype.delay;
    /** @type {?} */
    G2GaugeComponent.prototype.title;
    /** @type {?} */
    G2GaugeComponent.prototype.height;
    /** @type {?} */
    G2GaugeComponent.prototype.color;
    /** @type {?} */
    G2GaugeComponent.prototype.bgColor;
    /** @type {?} */
    G2GaugeComponent.prototype.format;
    /** @type {?} */
    G2GaugeComponent.prototype.percent;
    /** @type {?} */
    G2GaugeComponent.prototype.padding;
    /** @type {?} */
    G2GaugeComponent.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    G2GaugeComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2GaugeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzlEO0lBMEJFLGFBQWE7SUFFYiwwQkFBb0IsRUFBYyxFQUFVLE1BQWMsRUFBRSxTQUE2QjtRQUFyRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFabEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQU96QixZQUFPLEdBQStCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFNOUQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRU8sa0NBQU87Ozs7SUFBZjtRQUNFLGNBQWM7UUFDZCxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtZQUNoQyxJQUFJOzs7OztzQkFBQyxHQUFHLEVBQUUsU0FBUzs7b0JBQ1gsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDOzs7b0JBRTlCLE1BQU0sR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQzdELE9BQU87Z0JBQ1AsS0FBSyxD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QjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQXRCQyxVQUFVO2dCQUVWLE1BQU07Z0JBT0Msa0JBQWtCOzs7d0JBbUJ4QixLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUFSa0I7UUFBZCxXQUFXLEVBQUU7O21EQUFXO0lBRVY7UUFBZCxXQUFXLEVBQUU7O29EQUFnQjtJQUlmO1FBQWQsV0FBVyxFQUFFOztxREFBaUI7SUFxSjFDLHVCQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0FoS1ksZ0JBQWdCOzs7Ozs7SUFDM0IsaUNBQXFCOztJQUlyQixpQ0FBa0M7O0lBQ2xDLGlDQUF1Qjs7SUFDdkIsa0NBQXVDOztJQUN2QyxpQ0FBdUI7O0lBQ3ZCLG1DQUF5Qjs7SUFDekIsa0NBQW1FOztJQUNuRSxtQ0FBd0M7O0lBQ3hDLG1DQUFnRTs7SUFDaEUsaUNBQTJDOzs7OztJQUkvQiw4QkFBc0I7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyU2hhcGUsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWdhdWdlJyxcbiAgZXhwb3J0QXM6ICdnMkdhdWdlJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5nMi1nYXVnZV0nOiAndHJ1ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJHYXVnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGNoYXJ0OiBDaGFydDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7IC8vID0gJyMyZjljZmYnO1xuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7IC8vID0gJyNmMGYyZjUnO1xuICBASW5wdXQoKSBmb3JtYXQ6ICh0ZXh0OiBzdHJpbmcsIGl0ZW06IHt9LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSBbMTAsIDEwLCAzMCwgMTBdO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICAvLyDoh6rlrprkuYlTaGFwZSDpg6jliIZcbiAgICByZWdpc3RlclNoYXBlKCdwb2ludCcsICdwb2ludGVyJywge1xuICAgICAgZHJhdyhjZmcsIGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBncm91cCA9IGNvbnRhaW5lci5hZGRHcm91cCh7fSk7XG4gICAgICAgIC8vIOiOt+WPluaegeWdkOagh+ezu+S4i+eUu+W4g+S4reW/g+eCuVxuICAgICAgICBjb25zdCBjZW50ZXIgPSAodGhpcyBhcyBOelNhZmVBbnkpLnBhcnNlUG9pbnQoeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICAvLyDnu5jliLbmjIfpkohcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2xpbmUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHgxOiBjZW50ZXIueCxcbiAgICAgICAgICAgIHkxOiBjZW50ZXIueSxcbiAgICAgICAgICAgIHgyOiBjZmcueCxcbiAgICAgICAgICAgIHkyOiBjZmcueSxcbiAgICAgICAgICAgIHN0cm9rZTogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLjUsXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBncm91cC5hZGRTaGFwZSgnY2lyY2xlJywge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBjZW50ZXIueCxcbiAgICAgICAgICAgIHk6IGNlbnRlci55LFxuICAgICAgICAgICAgcjogNS43NSxcbiAgICAgICAgICAgIHN0cm9rZTogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ3JvdXA7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBlbCwgaGVpZ2h0LCBwYWRkaW5nLCBmb3JtYXQsIHRoZW1lIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZyxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmFuaW1hdGUoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIGNoYXJ0LmNvb3JkaW5hdGUoJ3BvbGFyJywge1xuICAgICAgc3RhcnRBbmdsZTogKC05IC8gOCkgKiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6ICgxIC8gOCkgKiBNYXRoLlBJLFxuICAgICAgcmFkaXVzOiAwLjc1LFxuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKCd2YWx1ZScsIHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwLFxuICAgICAgbmljZTogdHJ1ZSxcbiAgICAgIHRpY2tDb3VudDogNixcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCcxJywgZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG9mZnNldDogLTEyLFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgIH0sXG4gICAgICB0aWNrTGluZTogbnVsbCxcbiAgICAgIGdyaWQ6IG51bGwsXG4gICAgfSk7XG4gICAgY2hhcnQucG9pbnQoKS5wb3NpdGlvbigndmFsdWUqMScpLnNoYXBlKCdwb2ludGVyJyk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIHBlcmNlbnQsIGNvbG9yLCBiZ0NvbG9yLCB0aXRsZSB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0KSByZXR1cm47XG5cbiAgICBjb25zdCBkYXRhID0gW3sgbmFtZTogdGl0bGUsIHZhbHVlOiBwZXJjZW50IH1dO1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbMF0udmFsdWU7XG4gICAgY2hhcnQuYW5ub3RhdGlvbigpLmNsZWFyKHRydWUpO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgY2hhcnQuZ2VvbWV0cmllc1swXS5jb2xvcihjb2xvcik7XG4gICAgfVxuICAgIC8vIOe7mOWItuS7quihqOebmOiDjOaZr1xuICAgIGNoYXJ0LmFubm90YXRpb24oKS5hcmMoe1xuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFsxMDAsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgc3Ryb2tlOiBiZ0NvbG9yLFxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxuICAgICAgICBsaW5lRGFzaDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuYW5ub3RhdGlvbigpLmFyYyh7XG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSwgMC45NV0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxuICAgICAgICBsaW5lRGFzaDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyDnu5jliLbmjIfmoIfmlbDlrZdcbiAgICBjaGFydC5hbm5vdGF0aW9uKCkudGV4dCh7XG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnODUlJ10sXG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgMC40MyknLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5hbm5vdGF0aW9uKCkudGV4dCh7XG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnOTAlJ10sXG4gICAgICBjb250ZW50OiBgJHt2YWx9ICVgLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgICAgb2Zmc2V0WTogMTUsXG4gICAgfSk7XG5cbiAgICBjaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=