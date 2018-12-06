import { __decorate, __metadata, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var G2GaugeComponent = /** @class */ (function () {
    // #endregion
    function G2GaugeComponent(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
        this.color = '#2F9CFF';
        this.bgColor = '#F0F2F5';
        this.padding = [10, 10, 30, 10];
    }
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.createData = /**
     * @return {?}
     */
    function () {
        return [{ name: this.title, value: this.percent }];
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.draw = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, bgColor = _a.bgColor, color = _a.color, title = _a.title;
        if (!chart)
            return;
        /** @type {?} */
        var guide = chart.guide();
        guide.clear();
        /** @type {?} */
        var data = this.createData();
        // 绘制仪表盘背景
        guide.arc({
            zIndex: 0,
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                // 底灰色
                stroke: bgColor,
                lineWidth: 12,
            },
        });
        // 绘制指标
        guide.arc({
            zIndex: 1,
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
            },
        });
        // 绘制数字
        guide.html({
            position: ['50%', '95%'],
            html: "<div class=\"g2-gauge__desc\">\n        <div class=\"g2-gauge__title\">" + title + "</div>\n        <div class=\"g2-gauge__percent\">" + data[0].value + "%</div>\n      </div>",
        });
        this.chart.changeData(data);
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var Shape = G2.Shape;
        // 自定义Shape 部分
        Shape.registerShape('point', 'pointer', {
            drawShape: /**
             * @param {?} cfg
             * @param {?} group
             * @return {?}
             */
            function (cfg, group) {
                /** @type {?} */
                var point = cfg.points[0];
                point = this.parsePoint(point);
                /** @type {?} */
                var center = this.parsePoint({
                    // 获取极坐标系下画布中心点
                    x: 0,
                    y: 0,
                });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: point.x,
                        y2: point.y,
                        stroke: cfg.color,
                        lineWidth: 2,
                        lineCap: 'round',
                    },
                });
                // const { origin } = cfg;
                // group.addShape('text', {
                //   attrs: {
                //     x: center.x,
                //     y: center.y + 80,
                //     text: `${origin._origin.value}%`,
                //     textAlign: 'center',
                //     fontSize: 24,
                //     fill: 'rgba(0, 0, 0, 0.85)',
                //   },
                // });
                return group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 9.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff',
                    },
                });
            },
        });
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, format = _a.format, color = _a.color;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: true,
            height: height,
            padding: padding,
        });
        chart.source(this.createData());
        chart.coord('polar', {
            startAngle: Math.PI * -1.2,
            endAngle: Math.PI * 0.2,
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6,
        });
        chart.axis('1', false);
        // 刻度值
        chart.axis('value', {
            zIndex: 2,
            line: null,
            label: {
                offset: -12,
                formatter: format,
            },
            tickLine: null,
            grid: null,
        });
        chart.legend(false);
        chart
            .point({
            generatePoints: true,
        })
            .position('value*1')
            .shape('pointer')
            .color(color)
            .active(false);
        this.draw();
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.draw();
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
        }
    };
    G2GaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-gauge',
                    template: "",
                    host: {
                        '[class.g2-gauge]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2GaugeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2GaugeComponent.propDecorators = {
        delay: [{ type: Input }],
        title: [{ type: Input }],
        height: [{ type: Input }],
        color: [{ type: Input }],
        bgColor: [{ type: Input }],
        format: [{ type: Input }],
        percent: [{ type: Input }],
        padding: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2GaugeComponent.prototype, "delay", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2GaugeComponent.prototype, "height", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2GaugeComponent.prototype, "percent", void 0);
    return G2GaugeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2GaugeComponent];
var G2GaugeModule = /** @class */ (function () {
    function G2GaugeModule() {
    }
    G2GaugeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2GaugeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2GaugeComponent, G2GaugeModule };

//# sourceMappingURL=gauge.js.map