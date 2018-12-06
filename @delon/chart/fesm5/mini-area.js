import { __decorate, __metadata, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgModule } from '@angular/core';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var G2MiniAreaComponent = /** @class */ (function () {
    // #endregion
    function G2MiniAreaComponent(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
    }
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, fit = _a.fit, height = _a.height, animate = _a.animate, padding = _a.padding, xAxis = _a.xAxis, yAxis = _a.yAxis, yTooltipSuffix = _a.yTooltipSuffix, data = _a.data, color = _a.color, line = _a.line, borderColor = _a.borderColor, borderWidth = _a.borderWidth;
        /** @type {?} */
        var chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: fit,
            height: height,
            animate: animate,
            padding: padding,
            legend: null,
        });
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        /** @type {?} */
        var dataConfig = {
            x: {
                type: 'cat',
                range: [0, 1],
                xAxis: xAxis,
            },
            y: {
                min: 0,
                yAxis: yAxis,
            },
        };
        chart.tooltip({
            'showTitle': false,
            'hideMarkders': false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" },
        });
        /** @type {?} */
        var view = chart.view();
        view.source(data, dataConfig);
        view
            .area()
            .position('x*y')
            .color(color)
            .tooltip('x*y', function (x, y) {
            return {
                name: x,
                value: y + yTooltipSuffix,
            };
        })
            .shape('smooth')
            .style({ fillOpacity: 1 });
        if (line) {
            /** @type {?} */
            var view2 = chart.view();
            view2.source(data, dataConfig);
            view2
                .line()
                .position('x*y')
                .color(borderColor)
                .size(borderWidth)
                .shape('smooth');
            view2.tooltip(false);
        }
        chart.render();
        this.chart = chart;
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data, color = _a.color, borderColor = _a.borderColor, borderWidth = _a.borderWidth;
        if (!chart)
            return;
        /** @type {?} */
        var views = chart.get('views');
        views.forEach(function (v) {
            v.changeData(data);
        });
        views[0].get('geoms')[0].color(color);
        // line
        if (views.length > 1) {
            views[1].get('geoms')[0].color(borderColor).size(borderWidth);
        }
        chart.set('padding', padding);
        chart.repaint();
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
        }
    };
    G2MiniAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-area',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2MiniAreaComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2MiniAreaComponent.propDecorators = {
        delay: [{ type: Input }],
        color: [{ type: Input }],
        borderColor: [{ type: Input }],
        borderWidth: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        fit: [{ type: Input }],
        line: [{ type: Input }],
        animate: [{ type: Input }],
        xAxis: [{ type: Input }],
        yAxis: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        yTooltipSuffix: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "delay", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "borderWidth", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "height", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "fit", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "line", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "animate", void 0);
    return G2MiniAreaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2MiniAreaComponent];
var G2MiniAreaModule = /** @class */ (function () {
    function G2MiniAreaModule() {
    }
    G2MiniAreaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2MiniAreaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2MiniAreaComponent, G2MiniAreaModule };

//# sourceMappingURL=mini-area.js.map