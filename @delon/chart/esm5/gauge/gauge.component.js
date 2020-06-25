/**
 * @fileoverview added by tsickle
 * Generated from: gauge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { Chart, registerShape } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
var G2GaugeComponent = /** @class */ (function () {
    // #endregion
    function G2GaugeComponent(el, ngZone, configSrv, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        // #region fields
        this.delay = 0;
        this.color = '#2f9cff';
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
                offset: -14,
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
        chart.geometries[0].color(color);
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
                fontSize: 20,
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
        if (!this.platform.isBrowser) {
            return;
        }
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
        { type: AlainConfigService },
        { type: Platform }
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
    /**
     * @type {?}
     * @private
     */
    G2GaugeComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQVMsTUFBTSxVQUFVLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc5RDtJQTBCRSxhQUFhO0lBRWIsMEJBQW9CLEVBQWMsRUFBVSxNQUFjLEVBQUUsU0FBNkIsRUFBVSxRQUFrQjtRQUFqRyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QyxhQUFRLEdBQVIsUUFBUSxDQUFVOztRQVo3RixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR3pCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFJbEIsWUFBTyxHQUErQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBTTlELFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVPLGtDQUFPOzs7O0lBQWY7UUFDRSxjQUFjO1FBQ2QsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7WUFDaEMsSUFBSTs7Ozs7c0JBQUMsR0FBRyxFQUFFLFNBQVM7O29CQUNYLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs7O29CQUU5QixNQUFNLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLEVBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUM3RCxPQUFPO2dCQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNyQixLQUFLLEVBQUU7d0JBQ0wsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUNaLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDWixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ1QsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUNULE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSzt3QkFDakIsU0FBUyxFQUFFLEdBQUc7d0JBQ2QsT0FBTyxFQUFFLE9BQU87cUJBQ2pCO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtvQkFDdkIsS0FBSyxFQUFFO3dCQUNMLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDWCxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ1gsQ0FBQyxFQUFFLElBQUk7d0JBQ1AsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLO3dCQUNqQixTQUFTLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEVBQUUsTUFBTTtxQkFDYjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUcsSUFBQSxTQUE2QyxFQUEzQyxVQUFFLEVBQUUsa0JBQU0sRUFBRSxvQkFBTyxFQUFFLGtCQUFNLEVBQUUsZ0JBQWM7O1lBRTdDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUM7WUFDcEMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxhQUFhO1lBQzNCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxRQUFBO1lBQ04sT0FBTyxTQUFBO1lBQ1AsS0FBSyxPQUFBO1NBQ04sQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDOUIsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQzNCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsR0FBRztZQUNSLElBQUksRUFBRSxJQUFJO1lBQ1YsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRTtnQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUNYLFNBQVMsRUFBRSxNQUFNO2FBQ2xCO1lBQ0QsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLHNDQUFXOzs7O0lBQW5CO1FBQ1EsSUFBQSxTQUFnRCxFQUE5QyxnQkFBSyxFQUFFLG9CQUFPLEVBQUUsZ0JBQUssRUFBRSxvQkFBTyxFQUFFLGdCQUFjO1FBQ3RELElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTzs7WUFFYixJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDOztZQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDekIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxVQUFVO1FBQ1YsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNyQixHQUFHLEVBQUUsS0FBSztZQUNWLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztZQUMxQixLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDdEIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN4QixPQUFPLEVBQUUsS0FBSztZQUNkLEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixTQUFTLEVBQUUsUUFBUTthQUNwQjtTQUNGLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDdEIsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN4QixPQUFPLEVBQUssR0FBRyxPQUFJO1lBQ25CLEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUUscUJBQXFCO2dCQUMzQixTQUFTLEVBQUUsUUFBUTthQUNwQjtZQUNELE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLGNBQU0sT0FBQSxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsR0FBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVDLENBQTRDLEVBQUMsQ0FBQztJQUNwRixDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Z0JBM0tGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxFQUFFO29CQUNaLElBQUksRUFBRTt3QkFDSixrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQXRCQyxVQUFVO2dCQUVWLE1BQU07Z0JBT0Msa0JBQWtCO2dCQWJsQixRQUFROzs7d0JBZ0NkLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQVJrQjtRQUFkLFdBQVcsRUFBRTs7bURBQVc7SUFFVjtRQUFkLFdBQVcsRUFBRTs7b0RBQWdCO0lBSWY7UUFBZCxXQUFXLEVBQUU7O3FEQUFpQjtJQXNKMUMsdUJBQUM7Q0FBQSxBQTVLRCxJQTRLQztTQWpLWSxnQkFBZ0I7Ozs7OztJQUMzQixpQ0FBcUI7O0lBSXJCLGlDQUFrQzs7SUFDbEMsaUNBQXVCOztJQUN2QixrQ0FBdUM7O0lBQ3ZDLGlDQUEyQjs7SUFDM0IsbUNBQXlCOztJQUN6QixrQ0FBbUU7O0lBQ25FLG1DQUF3Qzs7SUFDeEMsbUNBQWdFOztJQUNoRSxpQ0FBMkM7Ozs7O0lBSS9CLDhCQUFzQjs7Ozs7SUFBRSxrQ0FBc0I7Ozs7O0lBQWlDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCByZWdpc3RlclNoYXBlLCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1nYXVnZScsXG4gIGV4cG9ydEFzOiAnZzJHYXVnZScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItZ2F1Z2VdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBjb2xvciA9ICcjMmY5Y2ZmJztcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nOyAvLyA9ICcjZjBmMmY1JztcbiAgQElucHV0KCkgZm9ybWF0OiAodGV4dDogc3RyaW5nLCBpdGVtOiB7fSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEwLCAxMCwgMzAsIDEwXTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBjb25maWdTcnYuYXR0YWNoS2V5KHRoaXMsICdjaGFydCcsICd0aGVtZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIC8vIOiHquWumuS5iVNoYXBlIOmDqOWIhlxuICAgIHJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XG4gICAgICBkcmF3KGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gY29udGFpbmVyLmFkZEdyb3VwKHt9KTtcbiAgICAgICAgLy8g6I635Y+W5p6B5Z2Q5qCH57O75LiL55S75biD5Lit5b+D54K5XG4gICAgICAgIGNvbnN0IGNlbnRlciA9ICh0aGlzIGFzIE56U2FmZUFueSkucGFyc2VQb2ludCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgIC8vIOe7mOWItuaMh+mSiFxuICAgICAgICBncm91cC5hZGRTaGFwZSgnbGluZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDE6IGNlbnRlci54LFxuICAgICAgICAgICAgeTE6IGNlbnRlci55LFxuICAgICAgICAgICAgeDI6IGNmZy54LFxuICAgICAgICAgICAgeTI6IGNmZy55LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIuNSxcbiAgICAgICAgICAgIGxpbmVDYXA6ICdyb3VuZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGdyb3VwLmFkZFNoYXBlKCdjaXJjbGUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHg6IGNlbnRlci54LFxuICAgICAgICAgICAgeTogY2VudGVyLnksXG4gICAgICAgICAgICByOiA1Ljc1LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGVsLCBoZWlnaHQsIHBhZGRpbmcsIGZvcm1hdCwgdGhlbWUgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYW5pbWF0ZShmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgY2hhcnQuY29vcmRpbmF0ZSgncG9sYXInLCB7XG4gICAgICBzdGFydEFuZ2xlOiAoLTkgLyA4KSAqIE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogKDEgLyA4KSAqIE1hdGguUEksXG4gICAgICByYWRpdXM6IDAuNzUsXG4gICAgfSk7XG4gICAgY2hhcnQuc2NhbGUoJ3ZhbHVlJywge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDAsXG4gICAgICBuaWNlOiB0cnVlLFxuICAgICAgdGlja0NvdW50OiA2LFxuICAgIH0pO1xuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgb2Zmc2V0OiAtMTQsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0LFxuICAgICAgfSxcbiAgICAgIHRpY2tMaW5lOiBudWxsLFxuICAgICAgZ3JpZDogbnVsbCxcbiAgICB9KTtcbiAgICBjaGFydC5wb2ludCgpLnBvc2l0aW9uKCd2YWx1ZSoxJykuc2hhcGUoJ3BvaW50ZXInKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgcGVyY2VudCwgY29sb3IsIGJnQ29sb3IsIHRpdGxlIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybjtcblxuICAgIGNvbnN0IGRhdGEgPSBbeyBuYW1lOiB0aXRsZSwgdmFsdWU6IHBlcmNlbnQgfV07XG4gICAgY29uc3QgdmFsID0gZGF0YVswXS52YWx1ZTtcbiAgICBjaGFydC5hbm5vdGF0aW9uKCkuY2xlYXIodHJ1ZSk7XG4gICAgY2hhcnQuZ2VvbWV0cmllc1swXS5jb2xvcihjb2xvcik7XG4gICAgLy8g57uY5Yi25Luq6KGo55uY6IOM5pmvXG4gICAgY2hhcnQuYW5ub3RhdGlvbigpLmFyYyh7XG4gICAgICB0b3A6IGZhbHNlLFxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcbiAgICAgIGVuZDogWzEwMCwgMC45NV0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBzdHJva2U6IGJnQ29sb3IsXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXG4gICAgICAgIGxpbmVEYXNoOiBudWxsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC5hbm5vdGF0aW9uKCkuYXJjKHtcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFtkYXRhWzBdLnZhbHVlLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXG4gICAgICAgIGxpbmVEYXNoOiBudWxsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmFubm90YXRpb24oKS50ZXh0KHtcbiAgICAgIHBvc2l0aW9uOiBbJzUwJScsICc4NSUnXSxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAwLjQzKScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmFubm90YXRpb24oKS50ZXh0KHtcbiAgICAgIHBvc2l0aW9uOiBbJzUwJScsICc5MCUnXSxcbiAgICAgIGNvbnRlbnQ6IGAke3ZhbH0gJWAsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgICBvZmZzZXRZOiAxNSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=