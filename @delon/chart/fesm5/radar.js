import { __decorate, __metadata, __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import { Chart } from '@antv/g2';
import { InputNumber, InputBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';

/**
 * @fileoverview added by tsickle
 * Generated from: radar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function G2RadarData() { }
if (false) {
    /** @type {?} */
    G2RadarData.prototype.name;
    /** @type {?} */
    G2RadarData.prototype.label;
    /** @type {?} */
    G2RadarData.prototype.value;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2RadarComponent = /** @class */ (function () {
    // #endregion
    function G2RadarComponent(cdr, ngZone) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.legendData = [];
        // #region fields
        this.delay = 0;
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
        this.data = [];
        this.colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
    }
    /**
     * @private
     * @return {?}
     */
    G2RadarComponent.prototype.getHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.height - (this.hasLegend ? 80 : 22);
    };
    /**
     * @private
     * @return {?}
     */
    G2RadarComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, node = _a.node, padding = _a.padding;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: node.nativeElement,
            autoFit: true,
            height: this.getHeight(),
            padding: padding,
        }));
        chart.coordinate('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            label: {
                offset: 8,
                style: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
            grid: {
                line: {
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
                },
            },
        });
        chart.axis('value', {
            grid: {
                line: {
                    type: 'polygon',
                    style: {
                        stroke: '#e9e9e9',
                        lineWidth: 1,
                        lineDash: [0, 0],
                    },
                },
            },
            label: {
                style: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
        });
        chart.filter('name', (/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var legendItem = _this.legendData.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.name === name; }));
            return legendItem ? legendItem.checked !== false : true;
        }));
        chart.line().position('label*value');
        chart.point().position('label*value').shape('circle').size(3);
        chart.render();
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2RadarComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data, colors = _a.colors, tickCount = _a.tickCount;
        if (!chart || !data || data.length <= 0)
            return;
        chart.height = this.getHeight();
        chart.padding = padding;
        chart.scale({
            value: {
                min: 0,
                tickCount: tickCount,
            },
        });
        chart.geometries.forEach((/**
         * @param {?} g
         * @return {?}
         */
        function (g) { return g.color('name', colors); }));
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
    G2RadarComponent.prototype.genLegend = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, hasLegend = _a.hasLegend, cdr = _a.cdr, chart = _a.chart;
        if (!hasLegend)
            return;
        this.legendData = chart.geometries[0].dataArray.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var origin = item[0]._origin;
            /** @type {?} */
            var result = {
                name: origin.name,
                color: item[0].color,
                checked: true,
                value: item.reduce((/**
                 * @param {?} p
                 * @param {?} n
                 * @return {?}
                 */
                function (p, n) { return p + n._origin.value; }), 0),
            };
            return result;
        }));
        cdr.detectChanges();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    G2RadarComponent.prototype._click = /**
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
    G2RadarComponent.prototype.ngOnInit = /**
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
    G2RadarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.legendData.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = true); }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnDestroy = /**
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
    G2RadarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-radar',
                    exportAs: 'g2Radar',
                    template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4>{{title}}</h4>\n</ng-container>\n<div #container></div>\n<div nz-row\n     class=\"g2-radar__legend\"\n     *ngIf=\"hasLegend\">\n  <div nz-col\n       [nzSpan]=\"24 / legendData.length\"\n       *ngFor=\"let i of legendData; let idx = index\"\n       (click)=\"_click(idx)\"\n       class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\"\n       [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
                    host: {
                        '[style.height.px]': 'height',
                        '[class.g2-radar]': 'true',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2RadarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2RadarComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container', { static: true },] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        hasLegend: [{ type: Input }],
        tickCount: [{ type: Input }],
        data: [{ type: Input }],
        colors: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2RadarComponent.prototype, "delay", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2RadarComponent.prototype, "height", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2RadarComponent.prototype, "hasLegend", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2RadarComponent.prototype, "tickCount", void 0);
    return G2RadarComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.node;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.chart;
    /** @type {?} */
    G2RadarComponent.prototype.legendData;
    /** @type {?} */
    G2RadarComponent.prototype.delay;
    /** @type {?} */
    G2RadarComponent.prototype.title;
    /** @type {?} */
    G2RadarComponent.prototype.height;
    /** @type {?} */
    G2RadarComponent.prototype.padding;
    /** @type {?} */
    G2RadarComponent.prototype.hasLegend;
    /** @type {?} */
    G2RadarComponent.prototype.tickCount;
    /** @type {?} */
    G2RadarComponent.prototype.data;
    /** @type {?} */
    G2RadarComponent.prototype.colors;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    G2RadarComponent.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: radar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2RadarComponent];
var G2RadarModule = /** @class */ (function () {
    function G2RadarModule() {
    }
    G2RadarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, NzGridModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2RadarModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: radar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2RadarComponent, G2RadarModule };
//# sourceMappingURL=radar.js.map
