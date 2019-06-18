import { __decorate, __metadata, __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import { InputNumber, InputBoolean, DelonUtilModule } from '@delon/util';
import { fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TITLE_HEIGHT = 41;
var G2BarComponent = /** @class */ (function () {
    // #endregion
    function G2BarComponent(ngZone) {
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
    }
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.getHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, padding = _a.padding;
        /** @type {?} */
        var container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: container,
            forceFit: true,
            legend: null,
            height: this.getHeight(),
            padding: padding,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false,
        });
        chart.source([], {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        chart
            .interval()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) { return ({ name: x, value: y }); }));
        chart.render();
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data, color = _a.color;
        if (!chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        var height = this.getHeight();
        if (chart.get('height') !== height) {
            chart.changeHeight(height);
        }
        // color
        chart.get('geoms')[0].color(color);
        chart.set('padding', padding);
        chart.changeData(data);
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.updatelabel = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, data = _a.data, chart = _a.chart;
        /** @type {?} */
        var canvasWidth = node.nativeElement.clientWidth;
        /** @type {?} */
        var minWidth = data.length * 30;
        chart.axis('x', canvasWidth > minWidth).repaint();
    };
    /**
     * @private
     * @return {?}
     */
    G2BarComponent.prototype.installResizeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter((/**
         * @return {?}
         */
        function () { return _this.chart; })), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.updatelabel(); })); }));
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnInit = /**
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
    G2BarComponent.prototype.ngOnChanges = /**
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
    G2BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-bar',
                    exportAs: 'g2Bar',
                    template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>\n",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2BarComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    G2BarComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container', { static: true },] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        autoLabel: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "delay", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "height", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "autoLabel", void 0);
    return G2BarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2BarComponent];
var G2BarModule = /** @class */ (function () {
    function G2BarModule() {
    }
    G2BarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2BarModule;
}());

export { G2BarComponent, G2BarModule };
//# sourceMappingURL=bar.js.map
